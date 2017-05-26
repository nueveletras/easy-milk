/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.easymilk.jpa.entities;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@Entity
@Table(name = "GROUPS_COWS")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "GroupCow.findAll", query = "SELECT g FROM GroupCow g")
    , @NamedQuery(name = "GroupCow.findByIdGroupCow", query = "SELECT g FROM GroupCow g WHERE g.idGroupCow = :idGroupCow")
    , @NamedQuery(name = "GroupCow.findByName", query = "SELECT g FROM GroupCow g WHERE g.name = :name")})
public class GroupCow implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID_GROUP_COW")
    private Integer idGroupCow;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 30)
    @Column(name = "NAME")
    private String name;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "groupCow")
    private Collection<PastureHasGroupCow> pastureHasGroupCowCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idGroupCow")
    private Collection<Cow> cowCollection;

    public GroupCow() {
    }

    public GroupCow(Integer idGroupCow) {
        this.idGroupCow = idGroupCow;
    }

    public GroupCow(Integer idGroupCow, String name) {
        this.idGroupCow = idGroupCow;
        this.name = name;
    }

    public Integer getIdGroupCow() {
        return idGroupCow;
    }

    public void setIdGroupCow(Integer idGroupCow) {
        this.idGroupCow = idGroupCow;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @XmlTransient
    public Collection<PastureHasGroupCow> getPastureHasGroupCowCollection() {
        return pastureHasGroupCowCollection;
    }

    public void setPastureHasGroupCowCollection(Collection<PastureHasGroupCow> pastureHasGroupCowCollection) {
        this.pastureHasGroupCowCollection = pastureHasGroupCowCollection;
    }

    @XmlTransient
    public Collection<Cow> getCowCollection() {
        return cowCollection;
    }

    public void setCowCollection(Collection<Cow> cowCollection) {
        this.cowCollection = cowCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idGroupCow != null ? idGroupCow.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof GroupCow)) {
            return false;
        }
        GroupCow other = (GroupCow) object;
        if ((this.idGroupCow == null && other.idGroupCow != null) || (this.idGroupCow != null && !this.idGroupCow.equals(other.idGroupCow))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.easymilk.jpa.entities.GroupCow[ idGroupCow=" + idGroupCow + " ]";
    }
    
}
