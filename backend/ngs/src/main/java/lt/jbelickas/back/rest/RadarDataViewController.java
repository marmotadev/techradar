package lt.jbelickas.back.rest;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lt.jbelickas.back.domain.Area;
import lt.jbelickas.back.domain.Blip;
import lt.jbelickas.back.domain.Radar;
import lt.jbelickas.back.domain.RadarGroup;
import lt.jbelickas.back.domain.User;
import lt.jbelickas.back.repository.BlipDataRepository;
import lt.jbelickas.back.repository.RadarGroupRepository;
import lt.jbelickas.back.repository.RadarRepository;
import lt.jbelickas.back.repository.UserRepository;

@RestController
@CrossOrigin(allowCredentials = "true", origins = { "*", "http://localhost:5555/" }, maxAge = 3600)
public class RadarDataViewController {
	private static final Logger logger = LoggerFactory.getLogger(RadarDataViewController.class);

	@Autowired
	private BlipDataRepository blipRepo;

	@Autowired
	private RadarGroupRepository groupRepo;

	@Autowired
	private RadarRepository radarRepo;

	@Autowired
	private UserRepository userRepo;

	// @Value("${batch.return.count:10}")
	// private Integer count;

	// @RequestMapping(value = "/status/{batchId}", method = RequestMethod.GET)
	// public Batch batchStatus(@PathVariable Long batchId, HttpServletResponse
	// response) throws IOException {
	// logger.debug("batch status started");
	// Batch batch = null;
	// try {
	// List<Batch> batches = blipRepo.findById(new PageRequest(0, 1),
	// batchId);
	// if(!batches.isEmpty()){
	// batch = batches.get(0);
	// } else {
	// response.sendError(HttpServletResponse.SC_ACCEPTED, "Batch not found");
	// }
	// } catch (Exception e) {
	// logger.error("Exception while getting batch status", e);
	// response.sendError(HttpServletResponse.SC_ACCEPTED, e.getMessage());
	// }
	// logger.debug("batch status ended");
	// return batch;
	// }
	//

	@RequestMapping(value = "/radar/{id}", method = RequestMethod.GET)
	// @JsonView(BlipView.class)
	public Radar viewRadar(@PathVariable("id") Long radarId, HttpServletResponse response) throws IOException {
		logger.debug("Request for radar id={}", radarId);
		Radar item = null;
		try {
			item = radarRepo.getById(radarId);
			if (item == null) {
				response.sendError(HttpServletResponse.SC_NOT_FOUND);
			} else {
//				item.getBlips();
				logger.debug("Radar found {}", item);
			}
		} catch (Exception e) {
			logger.error("Exception", e);
			response.sendError(HttpServletResponse.SC_ACCEPTED, e.getMessage());
		}
		return item;
	}

	@RequestMapping(value = "/radar/{id}/view/{area}", method = RequestMethod.GET)
	// @JsonView(BlipView.class)
	public List<Blip> list(@PathVariable("id") Long radarId, @PathVariable Area area, HttpServletResponse response)
			throws IOException {
		logger.debug("Request for data in radar {} and area {}", radarId, area);
		List<Blip> items = null;
		try {
			if (!radarRepo.exists(radarId)) {
				response.sendError(HttpServletResponse.SC_NOT_FOUND, "radar " + radarId);
			} else {
				items = blipRepo.findByRadar_IdAndArea(radarId, area);
			}
		} catch (Exception e) {
			logger.error("Exception", e);
			response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getMessage());
		}
		return items;
	}

	@RequestMapping(value = "/radar/save", method = RequestMethod.POST, consumes = "application/json")
	public void save(@RequestBody SaveBlipRequest saveBlip, HttpServletResponse response) throws IOException {
		Blip blip = saveBlip.getBlip();
		logger.info("Request to save {}", saveBlip);
		try {
			if (saveBlip == null || saveBlip.getBlip() == null || saveBlip.getRadarId() == null)
				throw new IllegalArgumentException();
			Radar radar = radarRepo.getById(saveBlip.getRadarId());
//
//			if (blip.getId() == 0)
//				blip.setId(null);
//			if (blip.getDateCreated() == null)
//				blip.setDateCreated(new Date());
			blip.setRadar(radar);
//			radar.getBlips().add(blip);
//			radarRepo.save(radar);
			 blipRepo.saveAndFlush(blip);
			response.sendError(HttpServletResponse.SC_CREATED);
		} catch (IllegalArgumentException e) {
			// logger.error("Exception", e);
			response.sendError(HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
		} catch (Exception e) {
			logger.error("Exception", e);
			response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getMessage());
		}
	}

	@RequestMapping(value = "/radar/move", method = RequestMethod.POST, consumes = "application/json")
	public void move(@RequestBody MoveBlipRequest blipReq, HttpServletResponse response) throws IOException {
		logger.info("Moving blip {}", blipReq);
		try {
			// if (blip.getId() == 0)
			// blip.setId(null);
			Blip blip = blipRepo.findOne(blipReq.getBlipId());
			logger.debug("Original: {}", blip);
			blip.setLevel(blipReq.getLevel());
			// blipReq.getBlip().setLevel(blipReq.getLevel());
			logger.debug("Changed: {}", blip);
			Long aboveId = blipReq.getMoveAboveThisId();
			if (aboveId != null) {
				Blip aboveOne = blipRepo.findOne(aboveId);
			}
			// aboveOne.get
			blipRepo.saveAndFlush(blip);
			response.sendError(HttpServletResponse.SC_OK);
		} catch (Exception e) {
			logger.error("Exception while getting newest batches", e);
			response.sendError(HttpServletResponse.SC_ACCEPTED, e.getMessage());
		}
	}

	@RequestMapping(value = "/radar/delete/{id}", method = { RequestMethod.GET }, produces = "application/json")
	public void delete(@PathVariable("id") Long blipId, HttpServletResponse response) throws IOException {
		logger.info("Delete blip {}", blipId);
		try {
			Blip blip = blipRepo.findOne(blipId);
//			blip.get
//			blip.g
			blipRepo.delete(blipId);
			;
			blipRepo.flush();
			response.sendError(HttpServletResponse.SC_OK);
		} catch (org.springframework.dao.EmptyResultDataAccessException e) {
			response.sendError(HttpServletResponse.SC_NOT_FOUND);
		} catch (IllegalArgumentException e) {
			response.sendError(HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
		} catch (Exception e) {
			logger.error("Exception", e);
			response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getMessage());
		}
	}

	@RequestMapping(value = "/group/{groupId}", method = RequestMethod.GET)
	public RadarGroup findUserGroup(@PathVariable("groupId") String groupId, HttpServletResponse response)
			throws IOException {
		logger.debug("Request for groups {}", groupId);
		RadarGroup items = null;
		try {
			items = groupRepo.findOne(groupId);

		} catch (Exception e) {
			logger.error("Exception while getting groups", e);
			response.sendError(HttpServletResponse.SC_ACCEPTED, e.getMessage());
		}
		return items;
	}

	@RequestMapping(value = "/group", method = RequestMethod.GET)
	public List<RadarGroup> findAllGroups(HttpServletResponse response) throws IOException {
		// logger.debug("Request for groups for user {}", groupId);
		List<RadarGroup> items = null;
		try {
			items = groupRepo.findAll();

		} catch (Exception e) {
			logger.error("Exception while getting groups", e);
			response.sendError(HttpServletResponse.SC_ACCEPTED, e.getMessage());
		}
		return items;
	}

	@RequestMapping(value = "/users/{login}", method = RequestMethod.GET)
	public List<User> listUsers(@PathVariable("login") String login, HttpServletResponse response) throws IOException {
		// logger.debug("Request for groups for user {}", groupId);
		List<User> items = null;
		try {
			items = userRepo.findByLogin(login);

		} catch (Exception e) {
			logger.error("Exception while getting groups", e);
			response.sendError(HttpServletResponse.SC_ACCEPTED, e.getMessage());
		}
		return items;
	}

	@RequestMapping(value = "/users/{login}/groups", method = RequestMethod.GET)
	public List<RadarGroup> userGroups(@PathVariable("login") String userLogin, HttpServletResponse response)
			throws IOException {
		logger.debug("Request for groups for user {}", userLogin);
		List<RadarGroup> items = null;
		try {
			items = groupRepo.findByUsersLogin(userLogin);

		} catch (Exception e) {
			logger.error("Exception while getting groups", e);
			response.sendError(HttpServletResponse.SC_ACCEPTED, e.getMessage());
		}
		return items;
	}

	@RequestMapping(value = "/auth/isauthenticated", method = RequestMethod.GET)
	public Boolean isAuthenticated(HttpServletRequest request, HttpServletResponse response) throws IOException {
		logger.debug("Request /auth/isauthenticated");
		return request.getUserPrincipal() != null;
	}

	@RequestMapping(value = "/users/{login}/radars", method = RequestMethod.GET)
	public List<Radar> userRadar(@PathVariable("login") String userLogin, HttpServletResponse response)
			throws IOException {
		logger.debug("Request for radar list for user {}", userLogin);
		List<Radar> items = null;
		try {
			items = radarRepo.findByUserGroupUsersLogin(userLogin);

		} catch (Exception e) {
			logger.error("Exception while getting groups", e);
			response.sendError(HttpServletResponse.SC_ACCEPTED, e.getMessage());
		}
		return items;
	}
	// @RequestMapping(value = "/user/{login}/groups", method =
	// RequestMethod.GET)
	// public List<RadarGroup> findUserGroups(@PathVariable("login") String
	// login, HttpServletResponse response)
	// throws IOException {
	// logger.debug("Request for groups for user {}", login);
	// List<RadarGroup> items = null;
	// try {
	// items = groupRepo.findById(login);
	//
	// } catch (Exception e) {
	// logger.error("Exception while getting groups", e);
	// response.sendError(HttpServletResponse.SC_ACCEPTED, e.getMessage());
	// }
	// return items;
	// }
}
