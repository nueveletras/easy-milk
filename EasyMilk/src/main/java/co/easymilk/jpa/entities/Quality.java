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
@Table(name = "QUALITIES")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Quality.findAll", query = "SELECT q FROM Quality q")
    , @NamedQuery(name = "Quality.findByIdQuality", query = "SELECT q FROM Quality q WHERE q.idQuality = :idQuality")
    , @NamedQuery(name = "Quality.findByDescription", query = "SELECT q FROM Quality q WHERE q.description = :description")})
public class Quality implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID_QUALITY")
    private Integer idQuality;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 60)
    @Column(name = "DESCRIPTION")
    private String description;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idQuality")
    private Collection<Production> productionCollection;

    public Quality() {
    }

    public Quality(Integer idQuality) {
        this.idQuality = idQuality;
    }

    public Quality(Integer idQuality, String description) {
        this.idQuality = idQuality;
        this.description = description;
    }

    public Integer getIdQuality() {
        return idQuality;
    }

    public void setIdQuality(Integer idQuality) {
        this.idQuality = idQuality;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @XmlTransient
    public Collection<Production> getProductionCollection() {
        return productionCollection;
    }

    public void setProductionCollection(Collection<Production> productionCollection) {
        this.productionCollection = productionCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idQuality != null ? idQuality.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Quality)) {
            return false;
        }
        Quality other = (Quality) object;
        if ((this.idQuality == null && other.idQuality != null) || (this.idQuality != null && !this.idQuality.equals(other.idQuality))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.easymilk.jpa.entities.Quality[ idQuality=" + idQuality + " ]";
    }
    
}
