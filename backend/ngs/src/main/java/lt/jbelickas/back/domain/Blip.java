package lt.jbelickas.back.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OrderBy;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Blip is a green dot on a radar screen :)
 * @author jbelickas
 *
 */
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Blip {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private Long id;
	private String title;
	@Enumerated(EnumType.STRING)	
	private Area area;
	@Enumerated(EnumType.STRING)
	private Level level;
	private Boolean isNew;
	private String description;
	@Temporal(TemporalType.TIMESTAMP)
	@OrderBy()
	private Date dateCreated;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Level getLevel() {
		return level;
	}
	public void setLevel(Level level) {
		this.level = level;
	}
	public Boolean getIsNew() {
		return isNew;
	}
	public void setIsNew(Boolean isNew) {
		this.isNew = isNew;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Area getArea() {
		return area;
	}
	public void setArea(Area area) {
		this.area = area;
	}
	public Date getDateCreated() {
		return dateCreated;
	}
	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
	@Override
	public String toString() {
		return "Blip [id=" + id + ", title=" + title + ", area=" + area + ", level=" + level + ", isNew=" + isNew
				+ ", description=" + description + ", dateCreated=" + dateCreated + "]";
	}
	
	
}
