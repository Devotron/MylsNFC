/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Admin
 */
@Entity
@Table(name = "COLIS")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Colis.findAll", query = "SELECT c.id, c.posx, c.posy, c.clientid, c.state FROM Colis c")
    , @NamedQuery(name = "Colis.findById", query = "SELECT c.id, c.posx, c.posy, c.state, c.clientid FROM Colis c WHERE c.id = :id")
    , @NamedQuery(name = "Colis.findByPosx", query = "SELECT c FROM Colis c WHERE c.posx = :posx")
    , @NamedQuery(name = "Colis.findByPosy", query = "SELECT c FROM Colis c WHERE c.posy = :posy")
    , @NamedQuery(name = "Colis.findByState", query = "SELECT c FROM Colis c WHERE c.state = :state")})
public class Colis implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "ID")
    private Integer id;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "POSX")
    private Double posx;
    @Column(name = "POSY")
    private Integer posy;
    @Size(max = 255)
    @Column(name = "STATE")
    private String state;
    @JoinTable(name = "LIVRAISON", joinColumns = {
        @JoinColumn(name = "COLISID", referencedColumnName = "ID")}, inverseJoinColumns = {
        @JoinColumn(name = "LIVREURID", referencedColumnName = "ID")})
    @ManyToMany
    private Collection<Livreur> livreurCollection;
    @JoinColumn(name = "CLIENTID", referencedColumnName = "ID")
    @ManyToOne
    private Client clientid;

    public Colis() {
    }

    public Colis(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getPosx() {
        return posx;
    }

    public void setPosx(Double posx) {
        this.posx = posx;
    }

    public Integer getPosy() {
        return posy;
    }

    public void setPosy(Integer posy) {
        this.posy = posy;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @XmlTransient
    public Collection<Livreur> getLivreurCollection() {
        return livreurCollection;
    }

    public void setLivreurCollection(Collection<Livreur> livreurCollection) {
        this.livreurCollection = livreurCollection;
    }

    public Client getClientid() {
        return clientid;
    }

    public void setClientid(Client clientid) {
        this.clientid = clientid;
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
        if (!(object instanceof Colis)) {
            return false;
        }
        Colis other = (Colis) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.Colis[ id=" + id + " ]";
    }
    
}
