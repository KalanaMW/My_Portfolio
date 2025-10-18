package com.portfolio.api.repository;

import com.portfolio.api.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {

    List<ContactMessage> findByIsReadFalseOrderByCreatedAtDesc();

    List<ContactMessage> findByEmailOrderByCreatedAtDesc(String email);

    List<ContactMessage> findAllByOrderByCreatedAtDesc();
}
