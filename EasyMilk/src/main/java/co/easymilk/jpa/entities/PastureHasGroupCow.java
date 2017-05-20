/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.easymilk.jpa.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@Entity
@Table(name = "PASTURES_HAS_GROUPS_COWS")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "PastureHasGroupCow.findAll", query = "SELECT p FROM PastureHasGroupCow p")
    , @NamedQuery(name = "PastureHasGroupCow.findByIdPastures", query = "SELECT p FROM PastureHasGroupCow p WHERE p.pastureHasGroupCowPK.idPastures = :idPastures")
    , @NamedQuery(name = "PastureHasGroupCow.findByIdGroupCow", query = "SELECT p FROM PastureHasGroupCow p WHERE p.pastureHasGroupCowPK.idGroupCow = :idGroupCow")
    , @NamedQuery(name = "PastureHasGroupCow.findByStartDate", query = "SELECT p FROM PastureHasGroupCow p WHERE p.pastureHasGroupCowPK.startDate = :startDate")
    , @NamedQuery(name = "PastureHasGroupCow.findByEndDate", query = "SELECT p FROM PastureHasGroupCow p WHERE p.endDate = :endDate")})
public class PastureHasGroupCow implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected PastureHasGroupCowPK pastureHasGroupCowPK;
    @Column(name = "END_DATE")
    @Temporal(TemporalType.DATE)
    private Date endDate;
    @JoinColumn(name = "ID_GROUP_COW", referencedColumnName = "ID_GROUP_COW", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private GroupCow groupCow;
    @JoinColumn(name = "ID_PASTURES", referencedColumnName = "ID_PASTURES", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Pasture pasture;

    public PastureHasGroupCow() {
    }

    public PastureHasGroupCow(PastureHasGroupCowPK pastureHasGroupCowPK) {
        this.pastureHasGroupCowPK = pastureHasGroupCowPK;
    }

    public PastureHasGroupCow(int idPastures, int idGroupCow, Date startDate) {
        this.pastureHasGroupCowPK = new PastureHasGroupCowPK(idPastures, idGroupCow, startDate);
    }

    public PastureHasGroupCowPK getPastureHasGroupCowPK() {
        return pastureHasGroupCowPK;
    }

    public void setPastureHasGroupCowPK(PastureHasGroupCowPK pastureHasGroupCowPK) {
        this.pastureHasGroupCowPK = pastureHasGroupCowPK;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public GroupCow getGroupCow() {
        return groupCow;
    }

    public void setGroupCow(GroupCow groupCow) {
        this.groupCow = groupCow;
    }

    public Pasture getPasture() {
        return pasture;
    }

    public void setPasture(Pasture pasture) {
        this.pasture = pasture;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (pastureHasGroupCowPK != null ? pastureHasGroupCowPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PastureHasGroupCow)) {
            return false;
        }
        PastureHasGroupCow other = (PastureHasGroupCow) object;
        if ((this.pastureHasGroupCowPK == null && other.pastureHasGroupCowPK != null) || (this.pastureHasGroupCowPK != null && !this.pastureHasGroupCowPK.equals(other.pastureHasGroupCowPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.easymilk.jpa.entities.PastureHasGroupCow[ pastureHasGroupCowPK=" + pastureHasGroupCowPK + " ]";
    }
    
}
