package lt.jbelickas.back.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


@Entity
public class RadarGroup {
	@Id
	private String id;

	private String title;
	
	@ManyToMany(fetch=FetchType.EAGER, cascade={CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
	private List<User> users;
	
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "RadarGroup [id=" + id + ", title=" + title + ", users=" + users + "]";
	}

}
