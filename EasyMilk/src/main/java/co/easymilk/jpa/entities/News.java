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
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@Entity
@Table(name = "NEWS")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "News.findAll", query = "SELECT n FROM News n")
    , @NamedQuery(name = "News.findByIdNew", query = "SELECT n FROM News n WHERE n.idNew = :idNew")
    , @NamedQuery(name = "News.findByRegisterDate", query = "SELECT n FROM News n WHERE n.registerDate = :registerDate")})
public class News implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID_NEW")
    private Integer idNew;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "DESCRIPTION")
    private String description;
    @Basic(optional = false)
    @NotNull
    @Column(name = "REGISTER_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date registerDate;
    @JoinColumn(name = "ID_COW", referencedColumnName = "ID_COW")
    @ManyToOne(optional = false)
    private Cow idCow;
    @JoinColumn(name = "ID_NEW_TYPE", referencedColumnName = "ID_NEW_TYPE")
    @ManyToOne(optional = false)
    private NewType idNewType;
    @JoinColumn(name = "ID_USER_REGISTER", referencedColumnName = "ID_USER")
    @ManyToOne(optional = false)
    private User idUserRegister;

    public News() {
    }

    public News(Integer idNew) {
        this.idNew = idNew;
    }

    public News(Integer idNew, String description, Date registerDate) {
        this.idNew = idNew;
        this.description = description;
        this.registerDate = registerDate;
    }

    public Integer getIdNew() {
        return idNew;
    }

    public void setIdNew(Integer idNew) {
        this.idNew = idNew;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    public Cow getIdCow() {
        return idCow;
    }

    public void setIdCow(Cow idCow) {
        this.idCow = idCow;
    }

    public NewType getIdNewType() {
        return idNewType;
    }

    public void setIdNewType(NewType idNewType) {
        this.idNewType = idNewType;
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
        hash += (idNew != null ? idNew.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof News)) {
            return false;
        }
        News other = (News) object;
        if ((this.idNew == null && other.idNew != null) || (this.idNew != null && !this.idNew.equals(other.idNew))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.easymilk.jpa.entities.News[ idNew=" + idNew + " ]";
    }
    
}
