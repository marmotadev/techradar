package lt.jbelickas.back.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Radar {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	private String title;
	@ManyToOne
	private RadarGroup userGroup;
	private String userLogin;

    @JsonBackReference
	@OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.REMOVE,
			CascadeType.DETACH }, mappedBy="radar")
	private List<Blip> blips;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserLogin() {
		return userLogin;
	}

	public void setUserLogin(String userLogin) {
		this.userLogin = userLogin;
	}

	public List<Blip> getBlips() {
		return blips;
	}

	public void setBlips(List<Blip> blips) {
		this.blips = blips;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public RadarGroup getUserGroup() {
		return userGroup;
	}

	public void setUserGroup(RadarGroup userGroup) {
		this.userGroup = userGroup;
	}

	@Override
	public String toString() {
		return "Radar [id=" + id + ", title=" + title + ", userGroup=" + userGroup + ", userLogin=" + userLogin
				+ ", blips=" + blips + "]";
	}

}
