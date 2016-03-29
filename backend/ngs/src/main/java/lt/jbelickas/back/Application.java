package lt.jbelickas.back;

import javax.servlet.ServletContext;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.context.ServletContextAware;


@Configuration
@ComponentScan
@EnableAutoConfiguration
@EnableConfigurationProperties
@PropertySource(value="file:${spring.config.location}", ignoreResourceNotFound = true)
public class Application extends SpringBootServletInitializer implements ServletContextAware {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }
//    @Bean
//    public MappingJackson2HttpMessageConverter jackson2Converter() {
//    	MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
//        return converter;
//    }
    
//    @Bean
//    public ServletRegistrationBean facesServletRegistration() {
//        ServletRegistrationBean registration = new ServletRegistrationBean(new FacesServlet(), new String[]{"*.xhtml"});
//        registration.setName("Faces Servlet");
//        registration.setLoadOnStartup(1);
//        return registration;
//    }
    
//    @Bean
//    public ServletListenerRegistrationBean<ConfigureListener> jsfConfigureListener() {
//        return new ServletListenerRegistrationBean<>(
//            new ConfigureListener());
//    }
    
//    @Bean
//    public SessionTimeoutFilter sessionTimeoutFilter() {
//            return new SessionTimeoutFilter();
//    }
    
//    @Bean
//    public FilterRegistrationBean pollSessionTimeoutFilter() {
//        FilterRegistrationBean registrationBean = new FilterRegistrationBean(new PollSessionTimeoutFilter(), facesServletRegistration());
//        registrationBean.setName("Poll Session Timeout Filter");
//        registrationBean.addUrlPatterns("/*");
//        registrationBean.setDispatcherTypes(DispatcherType.FORWARD, DispatcherType.REQUEST);
//        return registrationBean;
//    }
//    
//    @Bean
//    public FilterRegistrationBean facesUploadFilterRegistration() {
//        FilterRegistrationBean registrationBean = new FilterRegistrationBean(new FileUploadFilter(), facesServletRegistration());
//        registrationBean.setName("PrimeFaces FileUpload Filter");
//        registrationBean.addUrlPatterns("/*");
//        registrationBean.setDispatcherTypes(DispatcherType.FORWARD, DispatcherType.REQUEST);
//        return registrationBean;
//    }
        
    @Override
    public void setServletContext(ServletContext servletContext) {
//        servletContext.setInitParameter("com.sun.faces.forceLoadConfiguration", Boolean.TRUE.toString());  
//        servletContext.setInitParameter("javax.faces.PROJECT_STAGE", "Production");
//        servletContext.setInitParameter("primefaces.THEME", "none");
//        servletContext.setInitParameter("primefaces.FONT_AWESOME", Boolean.TRUE.toString());
//        servletContext.setInitParameter("javax.faces.FACELETS_SKIP_COMMENTS", Boolean.TRUE.toString()); 
//        servletContext.setInitParameter("primefaces.UPLOADER", "commons");
//        servletContext.addListener(ConfigureListener.class);
//        servletContext.addFilter("SessionTimeoutFilter", SessionTimeoutFilter.class);   
    }
    
//    @Bean
//    public static CustomScopeConfigurer getViewScopeConfigurer() {
//        CustomScopeConfigurer customScopeConfigurer = new CustomScopeConfigurer();
//        Map<String, Object> view = new HashMap<>();
//        view.put("view", new ViewScope());
//        customScopeConfigurer.setScopes(view);
//        return customScopeConfigurer;
//    }
        
//    @Bean
//    public WebMvcConfigurerAdapter forwardToIndex() {
//        return new WebMvcConfigurerAdapter() {
//            @Override
//            public void addViewControllers(ViewControllerRegistry registry) {
//                // forward requests to index page
//                registry.addViewController("/").setViewName(
//                        "forward:/login.xhtml");
//            }
//        };
//    }
                   
}