/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.easymilk.jpa.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@Entity
@Table(name = "PRODUCTIONS")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Production.findAll", query = "SELECT p FROM Production p")
    , @NamedQuery(name = "Production.findByIdProduction", query = "SELECT p FROM Production p WHERE p.idProduction = :idProduction")
    , @NamedQuery(name = "Production.findByRegisterDate", query = "SELECT p FROM Production p WHERE p.registerDate = :registerDate")
    , @NamedQuery(name = "Production.findByLiters", query = "SELECT p FROM Production p WHERE p.liters = :liters")})
public class Production implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID_PRODUCTION")
    private Integer idProduction;
    @Basic(optional = false)
    @NotNull
    @Column(name = "REGISTER_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date registerDate;
    @Basic(optional = false)
    @NotNull
    @Column(name = "LITERS")
    private double liters;
    @JoinColumn(name = "ID_COW", referencedColumnName = "ID_COW")
    @ManyToOne(optional = false)
    private Cow idCow;
    @JoinColumn(name = "ID_QUALITY", referencedColumnName = "ID_QUALITY")
    @ManyToOne(optional = false)
    private Quality idQuality;
    @JoinColumn(name = "ID_USER_REGISTER", referencedColumnName = "ID_USER")
    @ManyToOne(optional = false)
    private User idUserRegister;

    public Production() {
    }

    public Production(Integer idProduction) {
        this.idProduction = idProduction;
    }

    public Production(Integer idProduction, Date registerDate, double liters) {
        this.idProduction = idProduction;
        this.registerDate = registerDate;
        this.liters = liters;
    }

    public Integer getIdProduction() {
        return idProduction;
    }

    public void setIdProduction(Integer idProduction) {
        this.idProduction = idProduction;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    public double getLiters() {
        return liters;
    }

    public void setLiters(double liters) {
        this.liters = liters;
    }

    public Cow getIdCow() {
        return idCow;
    }

    public void setIdCow(Cow idCow) {
        this.idCow = idCow;
    }

    public Quality getIdQuality() {
        return idQuality;
    }

    public void setIdQuality(Quality idQuality) {
        this.idQuality = idQuality;
    }

    public User getIdUserRegister() {
        return idUserRegister;
    }

    public void setIdUserRegister(User idUserRegister) {
        this.idUserRegister = idUserRegister;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idProduction != null ? idProduction.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Production)) {
            return false;
        }
        Production other = (Production) object;
        if ((this.idProduction == null && other.idProduction != null) || (this.idProduction != null && !this.idProduction.equals(other.idProduction))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.easymilk.jpa.entities.Production[ idProduction=" + idProduction + " ]";
    }
    
}
