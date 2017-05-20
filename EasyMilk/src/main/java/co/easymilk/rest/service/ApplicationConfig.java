/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.easymilk.rest.service;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@javax.ws.rs.ApplicationPath("api")
public class ApplicationConfig extends Application {
 
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(co.easymilk.rest.service.CowFacadeREST.class);
        resources.add(co.easymilk.rest.service.GroupCowFacadeREST.class);
        resources.add(co.easymilk.rest.service.NewCrossOriginResourceSharingFilter.class);
        resources.add(co.easymilk.rest.service.NewTypeFacadeREST.class);
        resources.add(co.easymilk.rest.service.NewsFacadeREST.class);
        resources.add(co.easymilk.rest.service.PastureFacadeREST.class);
        resources.add(co.easymilk.rest.service.PastureHasGroupCowFacadeREST.class);
        resources.add(co.easymilk.rest.service.ProductionFacadeREST.class);
        resources.add(co.easymilk.rest.service.QualityFacadeREST.class);
        resources.add(co.easymilk.rest.service.UserFacadeREST.class);
    }
    
}
