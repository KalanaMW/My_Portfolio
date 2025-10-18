package com.portfolio.api.service;

import com.portfolio.api.model.ContactMessage;
import com.portfolio.api.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAllByOrderByCreatedAtDesc();
    }

    public List<ContactMessage> getUnreadMessages() {
        return contactMessageRepository.findByIsReadFalseOrderByCreatedAtDesc();
    }

    public Optional<ContactMessage> getMessageById(Long id) {
        return contactMessageRepository.findById(id);
    }

    public ContactMessage saveMessage(ContactMessage message) {
        return contactMessageRepository.save(message);
    }

    public void deleteMessage(Long id) {
        contactMessageRepository.deleteById(id);
    }

    public List<ContactMessage> getMessagesByEmail(String email) {
        return contactMessageRepository.findByEmailOrderByCreatedAtDesc(email);
    }

    public ContactMessage markAsRead(Long id) {
        Optional<ContactMessage> optionalMessage = contactMessageRepository.findById(id);
        if (optionalMessage.isPresent()) {
            ContactMessage message = optionalMessage.get();
            message.setRead(true);
            return contactMessageRepository.save(message);
        }
        return null;
    }

    public long getUnreadMessageCount() {
        return contactMessageRepository.findByIsReadFalseOrderByCreatedAtDesc().size();
    }
}
