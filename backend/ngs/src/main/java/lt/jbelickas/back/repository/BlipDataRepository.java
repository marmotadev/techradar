package lt.jbelickas.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.jbelickas.back.domain.Area;
import lt.jbelickas.back.domain.Blip;

public interface BlipDataRepository extends JpaRepository<Blip, Long>  {
    
//    @Query("SELECT distinct b FROM Batch b join fetch b.notifications where b.area = :area")
    List<Blip> findByRadar_IdAndArea(@Param("radarId")Long radarId, @Param("area")Area area);
    
    @Query("SELECT b FROM Radar r LEFT JOIN r.blips b WHERE r.userLogin = :login")
    List<Blip> findByUserLogin(@Param("login")String login);
    
//    @Query("SELECT b FROM Batch b where b.submitted < :cleanBefore")
//    List<Batch> findBySubmittedBefore(@Param("cleanBefore") Date cleanBefore);
//    
//    @Query("SELECT b FROM Batch b join fetch b.notifications where b.id = :id")
//    List<Batch> findById(Pageable pageable, @Param("id")Long id);
//    
//    @Query("SELECT b FROM Batch b ORDER BY b.submitted DESC")
//    List<Batch> findNewest(Pageable pageable);
}
