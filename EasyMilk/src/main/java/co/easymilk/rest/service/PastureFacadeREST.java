/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.easymilk.rest.service;

import co.easymilk.jpa.entities.Pasture;
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

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@Stateless
@Path("pastures")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PastureFacadeREST extends AbstractFacade<Pasture> {

    @PersistenceContext(unitName = "co.easymilk_EasyMilk_war_1PU")
    private EntityManager em;

    public PastureFacadeREST() {
        super(Pasture.class);
    }

    @POST
    @Override
    public void create(Pasture entity) {
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    public void edit(@PathParam("id") Integer id, Pasture entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    public Pasture find(@PathParam("id") Integer id) {
        return super.find(id);
    }

    @GET
    @Override
    public List<Pasture> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    public List<Pasture> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
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
