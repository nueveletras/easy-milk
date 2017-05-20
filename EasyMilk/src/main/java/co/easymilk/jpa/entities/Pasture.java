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
import javax.persistence.Lob;
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
@Table(name = "PASTURES")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Pasture.findAll", query = "SELECT p FROM Pasture p")
    , @NamedQuery(name = "Pasture.findByIdPastures", query = "SELECT p FROM Pasture p WHERE p.idPastures = :idPastures")
    , @NamedQuery(name = "Pasture.findByArea", query = "SELECT p FROM Pasture p WHERE p.area = :area")})
public class Pasture implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID_PASTURES")
    private Integer idPastures;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "DESCRIPTION")
    private String description;
    @Basic(optional = false)
    @NotNull
    @Column(name = "AREA")
    private double area;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "pasture")
    private Collection<PastureHasGroupCow> pastureHasGroupCowCollection;

    public Pasture() {
    }

    public Pasture(Integer idPastures) {
        this.idPastures = idPastures;
    }

    public Pasture(Integer idPastures, String description, double area) {
        this.idPastures = idPastures;
        this.description = description;
        this.area = area;
    }

    public Integer getIdPastures() {
        return idPastures;
    }

    public void setIdPastures(Integer idPastures) {
        this.idPastures = idPastures;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    @XmlTransient
    public Collection<PastureHasGroupCow> getPastureHasGroupCowCollection() {
        return pastureHasGroupCowCollection;
    }

    public void setPastureHasGroupCowCollection(Collection<PastureHasGroupCow> pastureHasGroupCowCollection) {
        this.pastureHasGroupCowCollection = pastureHasGroupCowCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPastures != null ? idPastures.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Pasture)) {
            return false;
        }
        Pasture other = (Pasture) object;
        if ((this.idPastures == null && other.idPastures != null) || (this.idPastures != null && !this.idPastures.equals(other.idPastures))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.easymilk.jpa.entities.Pasture[ idPastures=" + idPastures + " ]";
    }
    
}
