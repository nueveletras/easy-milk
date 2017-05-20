/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.easymilk.rest.service;

import co.easymilk.jpa.entities.PastureHasGroupCow;
import co.easymilk.jpa.entities.PastureHasGroupCowPK;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.PathSegment;

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@Stateless
@Path("pastures-has-groups-cows")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PastureHasGroupCowFacadeREST extends AbstractFacade<PastureHasGroupCow> {

    @PersistenceContext(unitName = "co.easymilk_EasyMilk_war_1PU")
    private EntityManager em;

    private PastureHasGroupCowPK getPrimaryKey(PathSegment pathSegment) {
        /*
         * pathSemgent represents a URI path segment and any associated matrix parameters.
         * URI path part is supposed to be in form of 'somePath;idPastures=idPasturesValue;idGroupCow=idGroupCowValue;startDate=startDateValue'.
         * Here 'somePath' is a result of getPath() method invocation and
         * it is ignored in the following code.
         * Matrix parameters are used as field names to build a primary key instance.
         */
        co.easymilk.jpa.entities.PastureHasGroupCowPK key = new co.easymilk.jpa.entities.PastureHasGroupCowPK();
        javax.ws.rs.core.MultivaluedMap<String, String> map = pathSegment.getMatrixParameters();
        java.util.List<String> idPastures = map.get("idPastures");
        if (idPastures != null && !idPastures.isEmpty()) {
            key.setIdPastures(new java.lang.Integer(idPastures.get(0)));
        }
        java.util.List<String> idGroupCow = map.get("idGroupCow");
        if (idGroupCow != null && !idGroupCow.isEmpty()) {
            key.setIdGroupCow(new java.lang.Integer(idGroupCow.get(0)));
        }
        java.util.List<String> startDate = map.get("startDate");
        if (startDate != null && !startDate.isEmpty()) {
            key.setStartDate(new java.util.Date(startDate.get(0)));
        }
        return key;
    }

    public PastureHasGroupCowFacadeREST() {
        super(PastureHasGroupCow.class);
    }

    @POST
    @Override
    public void create(PastureHasGroupCow entity) {
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    public void edit(@PathParam("id") PathSegment id, PastureHasGroupCow entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") PathSegment id) {
        co.easymilk.jpa.entities.PastureHasGroupCowPK key = getPrimaryKey(id);
        super.remove(super.find(key));
    }

    @GET
    @Path("{id}")
    public PastureHasGroupCow find(@PathParam("id") PathSegment id) {
        co.easymilk.jpa.entities.PastureHasGroupCowPK key = getPrimaryKey(id);
        return super.find(key);
    }

    @GET
    @Override
    public List<PastureHasGroupCow> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    public List<PastureHasGroupCow> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
        return super.findRange(new int[]{from, to});
    }

    @GET
    @Path("count")
    @Produces(MediaType.TEXT_PLAIN)
    public String countREST() {
        return String.valueOf(super.count());
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
    
}
