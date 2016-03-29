package lt.jbelickas.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import lt.jbelickas.back.domain.RadarGroup;

public interface RadarGroupRepository extends JpaRepository<RadarGroup, String>  {
    
    List<RadarGroup> findById(@Param("id") String id);

	List<RadarGroup> findByUsersLogin(@Param("login") String login);
}
