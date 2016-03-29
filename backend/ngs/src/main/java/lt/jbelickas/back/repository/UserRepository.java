package lt.jbelickas.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.jbelickas.back.domain.User;

public interface UserRepository extends JpaRepository<User, Long>  {

	List<User> findByLogin(String login);
    
}
