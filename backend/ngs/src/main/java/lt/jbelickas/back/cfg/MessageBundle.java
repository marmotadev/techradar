package lt.jbelickas.back.cfg;

import java.util.HashMap;

import javax.faces.context.FacesContext;
import javax.servlet.ServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.NoSuchMessageException;
import org.springframework.stereotype.Component;

@Component(value = "msg")
public class MessageBundle extends HashMap<String, String> {
    private static final Logger logger = LoggerFactory.getLogger(MessageBundle.class);

    private static final long serialVersionUID = 8837231236715894118L;

    @Autowired
    private MessageSource messageSource;

    @Override
    public String get(Object key) {
        ServletRequest request = (ServletRequest) FacesContext.getCurrentInstance().getExternalContext().getRequest();
        String message;
        try {
            message = messageSource.getMessage((String) key, null, request.getLocale());
        } catch (NoSuchMessageException e) {
            logger.warn("Message key ({}) not found", key);
            message = "???" + key + "???";
        }
        return message;
    }
}