/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.easymilk.rest.service;

import co.easymilk.jpa.entities.Cow;
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
import javax.ws.rs.core.Response;

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@Stateless
@Path("cows")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CowFacadeREST extends AbstractFacade<Cow> {

    @PersistenceContext(unitName = "co.easymilk_EasyMilk_war_1PU")
    private EntityManager em;

    public CowFacadeREST() {
        super(Cow.class);
    }

    @POST
    public Response add(Cow entity) {
        super.create(entity);
        return Response.ok().entity("La vaca se registro exitosamente").build();
    }

    @PUT
    @Path("{id}")
    public void edit(@PathParam("id") Integer id, Cow entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    public Cow find(@PathParam("id") Integer id) {
        return super.find(id);
    }

    @GET
    @Override
    public List<Cow> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    public List<Cow> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
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
