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
@Table(name = "NEWS_TYPES")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "NewType.findAll", query = "SELECT n FROM NewType n")
    , @NamedQuery(name = "NewType.findByIdNewType", query = "SELECT n FROM NewType n WHERE n.idNewType = :idNewType")
    , @NamedQuery(name = "NewType.findByDescription", query = "SELECT n FROM NewType n WHERE n.description = :description")})
public class NewType implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID_NEW_TYPE")
    private Integer idNewType;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 60)
    @Column(name = "DESCRIPTION")
    private String description;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idNewType")
    private Collection<News> newsCollection;

    public NewType() {
    }

    public NewType(Integer idNewType) {
        this.idNewType = idNewType;
    }

    public NewType(Integer idNewType, String description) {
        this.idNewType = idNewType;
        this.description = description;
    }

    public Integer getIdNewType() {
        return idNewType;
    }

    public void setIdNewType(Integer idNewType) {
        this.idNewType = idNewType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @XmlTransient
    public Collection<News> getNewsCollection() {
        return newsCollection;
    }

    public void setNewsCollection(Collection<News> newsCollection) {
        this.newsCollection = newsCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idNewType != null ? idNewType.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof NewType)) {
            return false;
        }
        NewType other = (NewType) object;
        if ((this.idNewType == null && other.idNewType != null) || (this.idNewType != null && !this.idNewType.equals(other.idNewType))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.easymilk.jpa.entities.NewType[ idNewType=" + idNewType + " ]";
    }
    
}
