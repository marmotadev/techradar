package lt.jbelickas.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import lt.jbelickas.back.domain.Radar;

public interface RadarRepository extends JpaRepository<Radar, Long>  {
    
	List<Radar> findByUserGroupUsersLogin(@Param("login") String login);

	Radar getById(Long radarId);
}
