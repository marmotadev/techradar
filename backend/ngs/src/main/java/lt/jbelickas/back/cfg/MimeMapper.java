package lt.jbelickas.back.cfg;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.MimeMappings;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MimeMapper implements EmbeddedServletContainerCustomizer {
    @Override
    public void customize(ConfigurableEmbeddedServletContainer container) {
        MimeMappings mappings = new MimeMappings(MimeMappings.DEFAULT);
        mappings.add("ttf", "application/font-sfnt");
        mappings.add("woff", "application/font-woff");
        mappings.add("woff2", "application/font-woff2");
        mappings.add("eot", "application/vnd.ms-fontobject");
        String imageSvgXml = "image/svg+xml";
        mappings.add("eot?#iefix", "application/vnd.ms-fontobject");
        mappings.add("svg", imageSvgXml);
        mappings.add("svg#exobolditalic", imageSvgXml);
        mappings.add("svg#exomedium", imageSvgXml);
        mappings.add("svg#exoregular", imageSvgXml);
        mappings.add("svg#fontawesomeregular", imageSvgXml);
        container.setMimeMappings(mappings);
    }
}
