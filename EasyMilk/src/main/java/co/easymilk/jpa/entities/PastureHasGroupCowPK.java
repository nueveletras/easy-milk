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
import javax.persistence.Embeddable;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@Embeddable
public class PastureHasGroupCowPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "ID_PASTURES")
    private int idPastures;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ID_GROUP_COW")
    private int idGroupCow;
    @Basic(optional = false)
    @NotNull
    @Column(name = "START_DATE")
    @Temporal(TemporalType.DATE)
    private Date startDate;

    public PastureHasGroupCowPK() {
    }

    public PastureHasGroupCowPK(int idPastures, int idGroupCow, Date startDate) {
        this.idPastures = idPastures;
        this.idGroupCow = idGroupCow;
        this.startDate = startDate;
    }

    public int getIdPastures() {
        return idPastures;
    }

    public void setIdPastures(int idPastures) {
        this.idPastures = idPastures;
    }

    public int getIdGroupCow() {
        return idGroupCow;
    }

    public void setIdGroupCow(int idGroupCow) {
        this.idGroupCow = idGroupCow;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) idPastures;
        hash += (int) idGroupCow;
        hash += (startDate != null ? startDate.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PastureHasGroupCowPK)) {
            return false;
        }
        PastureHasGroupCowPK other = (PastureHasGroupCowPK) object;
        if (this.idPastures != other.idPastures) {
            return false;
        }
        if (this.idGroupCow != other.idGroupCow) {
            return false;
        }
        if ((this.startDate == null && other.startDate != null) || (this.startDate != null && !this.startDate.equals(other.startDate))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.easymilk.jpa.entities.PastureHasGroupCowPK[ idPastures=" + idPastures + ", idGroupCow=" + idGroupCow + ", startDate=" + startDate + " ]";
    }
    
}
