/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.easymilk.rest.service;

import co.easymilk.jpa.entities.GroupCow;
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
@Path("groups-cows")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class GroupCowFacadeREST extends AbstractFacade<GroupCow> {

    @PersistenceContext(unitName = "co.easymilk_EasyMilk_war_1PU")
    private EntityManager em;

    public GroupCowFacadeREST() {
        super(GroupCow.class);
    }

    @POST
    public Response add(GroupCow entity) {
        super.create(entity);
        return Response.ok().entity("Grupo Vacas creado exitosamente!").build();
    }

    @PUT
    @Path("{id}")
    public void edit(@PathParam("id") Integer id, GroupCow entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    public GroupCow find(@PathParam("id") Integer id) {
        return super.find(id);
    }

    @GET
    @Override
    public List<GroupCow> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    public List<GroupCow> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
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
