package lt.jbelickas.back.cfg;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebSecurity 
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    public final static String ADMIN_ROLE = "ADMIN";

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }
    
//    @Override
//    public void configure(WebSecurity web) throws Exception {
//        web
//                .ignoring()
//                .antMatchers(
//                        "/resources/**"
//                        ,"/template/**"
//                        , "/shutdown"
//                );
//    }
//
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .httpBasic()
                .and()
                    .authorizeRequests()
                        .antMatchers("/javax.faces.resource/**").permitAll()
                        .antMatchers("/home.xhtml").hasRole(ADMIN_ROLE)
                        .antMatchers("/login.xhtml").permitAll()
                        .antMatchers("/").permitAll()
                        .antMatchers("/importer/**").hasRole(ADMIN_ROLE)
                        .antMatchers("/status/**").hasRole(ADMIN_ROLE)
                        .antMatchers("/health").permitAll()
                    	.antMatchers("/radar/tools").permitAll()
                        .anyRequest().authenticated()
                        .anyRequest().permitAll()
                        
                .and()
                    .sessionManagement()
                    .sessionFixation()
                    .newSession()
                .and()
                    .csrf()  //cross site request forgery, without disabling login doesnt work
                    .disable()
                        ;
    }

//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        auth
//            .inMemoryAuthentication()
//                .withUser("admin").password("admin").roles(ADMIN_ROLE);
//    }
//    @Configuration
//    protected static class AuthenticationConfiguration extends
//            GlobalAuthenticationConfigurerAdapter {
//
//        @Value("${ldap.user.search.filter:@null}")
//        private String userSearchFilter;
//        @Value("${ldap.user.search.base:@null}")
//        private String userSearchBase;
//        @Value("${ldap.group.search.filter:@null}")
//        private String groupSearchFilter;
//        @Value("${ldap.group.search.base:@null}")
//        private String groupSearchBase;
//        @Value("${ldap.url:@null}")
//        private String url;
//        @Value("${ldap.manager.dn:@null}")
//        private String managerDn;
//        @Value("${ldap.manager.password:@null}")
//        private String managerPassword;
//        @Value("${ldap.use.built.in:false}")
//        private boolean builtin;
//        @Value("${ldap.user.display.name:cn}")
//        private String displayName;
//        @Value("${ldap.group.ngs.admin:ADMIN}")
//        private String roleName;
//
//        @Override
//        public void init(AuthenticationManagerBuilder auth) throws Exception {
//            if(builtin){
//                auth
//                .ldapAuthentication()
//                .userDetailsContextMapper(new LdapUserDetailsMapper() {
//                    @Override
//                    public UserDetails mapUserFromContext(DirContextOperations ctx, String username, Collection<? extends GrantedAuthority> authorities) {
//                        UserDetails details = super.mapUserFromContext(ctx, username, authorities);
//                        return new CustomLdapUserDetails((LdapUserDetails) details, ctx.getStringAttribute(displayName), "ROLE_"+roleName.toUpperCase());
//                    }
//                })
//                .groupSearchBase(groupSearchBase)
//                .groupSearchFilter(groupSearchFilter)
//                .userSearchBase(userSearchBase)
//                .userSearchFilter(userSearchFilter)
//                .contextSource().ldif("classpath:test-server.ldif")
//                .root("dc=corp,dc=nordlb,dc=lt")
//                .managerDn(managerDn)
//                .managerPassword(managerPassword);
//            } else {
//                auth
//                .ldapAuthentication()
//                .userDetailsContextMapper(new LdapUserDetailsMapper() {
//                    @Override
//                    public UserDetails mapUserFromContext(DirContextOperations ctx, String username, Collection<? extends GrantedAuthority> authorities) {
//                        UserDetails details = super.mapUserFromContext(ctx, username, authorities);
//                        return new CustomLdapUserDetails((LdapUserDetails) details, ctx.getStringAttribute(displayName), "ROLE_"+roleName.toUpperCase());
//                    }
//                })
//                .groupSearchBase(groupSearchBase)
//                .groupSearchFilter(groupSearchFilter)
//                .userSearchBase(userSearchBase)
//                .userSearchFilter(userSearchFilter)
//                .contextSource().url(url)
//                .managerDn(managerDn)
//                .managerPassword(managerPassword);
//            }
//
//        }
//    }
}