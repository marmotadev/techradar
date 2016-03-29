package lt.jbelickas.back.rest;

import lt.jbelickas.back.domain.Blip;

public class SaveBlipRequest {
	private Blip blip;
	private Long radarId;
	public Blip getBlip() {
		return blip;
	}
	public void setBlip(Blip blip) {
		this.blip = blip;
	}
	public Long getRadarId() {
		return radarId;
	}
	public void setRadarId(Long radarId) {
		this.radarId = radarId;
	}
	@Override
	public String toString() {
		return "SaveBlipRequest [blip=" + blip + ", radarId=" + radarId + "]";
	}
	
}
