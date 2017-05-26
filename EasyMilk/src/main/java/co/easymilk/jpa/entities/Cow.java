package co.easymilk.jpa.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author "INNOVAPPS.CO S.A.S."
 */
@Entity
@Table(name = "COWS")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Cow.findAll", query = "SELECT c FROM Cow c")
    , @NamedQuery(name = "Cow.findByIdCow", query = "SELECT c FROM Cow c WHERE c.id = :idCow")
    , @NamedQuery(name = "Cow.findByName", query = "SELECT c FROM Cow c WHERE c.name = :name")
    , @NamedQuery(name = "Cow.findByBirthDate", query = "SELECT c FROM Cow c WHERE c.birthDate = :birthDate")
    , @NamedQuery(name = "Cow.findByBuyDate", query = "SELECT c FROM Cow c WHERE c.buyDate = :buyDate")})
public class Cow implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "ID_COW")
    private Integer id;
    @Size(max = 20)
    @Column(name = "NAME")
    private String name;
    @Basic(optional = false)
    @NotNull
    @Column(name = "BIRTH_DATE")
    @Temporal(TemporalType.DATE)
    private Date birthDate;
    @Column(name = "BUY_DATE")
    @Temporal(TemporalType.DATE)
    private Date buyDate;
    @JoinColumn(name = "ID_GROUP_COW", referencedColumnName = "ID_GROUP_COW")
    @ManyToOne(optional = false)
    private GroupCow idGroupCow;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idCow")
    private Collection<News> newsCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idCow")
    private Collection<Production> productionCollection;

    public Cow() {
    }

    public Cow(Integer idCow) {
        this.id = idCow;
    }

    public Cow(Integer idCow, Date birthDate) {
        this.id = idCow;
        this.birthDate = birthDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public Date getBuyDate() {
        return buyDate;
    }

    public void setBuyDate(Date buyDate) {
        this.buyDate = buyDate;
    }

    public GroupCow getIdGroupCow() {
        return idGroupCow;
    }

    public void setIdGroupCow(GroupCow idGroupCow) {
        this.idGroupCow = idGroupCow;
    }

    @XmlTransient
    public Collection<News> getNewsCollection() {
        return newsCollection;
    }

    public void setNewsCollection(Collection<News> newsCollection) {
        this.newsCollection = newsCollection;
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
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Cow)) {
            return false;
        }
        Cow other = (Cow) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.easymilk.jpa.entities.Cow[ idCow=" + id + " ]";
    }
    
}
