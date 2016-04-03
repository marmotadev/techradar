package lt.jbelickas.back.rest;

public class UpdateTitleRequest {
	private Long radarId;
	private String title;

	public Long getRadarId() {
		return radarId;
	}

	public void setRadarId(Long radarId) {
		this.radarId = radarId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Override
	public String toString() {
		return "UpdateTitleRequest [radarId=" + radarId + ", title=" + title + "]";
	}

}
