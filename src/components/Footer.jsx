import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award, FileText, Star } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';

export default function Footer({ onOpenConsultation, onOpenProposal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" style={styles.footer}>
      {/* Visually hidden backlinks for SEO indexing — not visible to users */}
      <div style={styles.visuallyHidden} aria-hidden="true">
        {/* — General Business Directories — */}
        <a href="https://business.google.com/" rel="noopener noreferrer">Google Business Profile</a>
        <a href="https://www.bingplaces.com/" rel="noopener noreferrer">Bing Places</a>
        <a href="https://www.yelp.com/" rel="noopener noreferrer">Yelp</a>
        <a href="https://www.yellowpages.com/" rel="noopener noreferrer">Yellow Pages</a>
        <a href="https://www.manta.com/" rel="noopener noreferrer">Manta</a>
        <a href="https://www.hotfrog.com/" rel="noopener noreferrer">Hotfrog</a>
        <a href="https://www.brownbook.net/" rel="noopener noreferrer">Brownbook</a>
        <a href="https://www.cylex.us.com/" rel="noopener noreferrer">Cylex US</a>
        <a href="https://www.cylex-canada.ca/" rel="noopener noreferrer">Cylex Canada</a>
        <a href="https://www.cylex.pt/" rel="noopener noreferrer">Cylex Portugal</a>
        <a href="https://www.cylex-france.fr/" rel="noopener noreferrer">Cylex France</a>
        <a href="https://www.cylex.de/" rel="noopener noreferrer">Cylex Germany</a>
        <a href="https://www.cylex.es/" rel="noopener noreferrer">Cylex Spain</a>
        <a href="https://www.cylex-uk.co.uk/" rel="noopener noreferrer">Cylex UK</a>
        <a href="https://www.chamberofcommerce.com/" rel="noopener noreferrer">Chamber of Commerce</a>
        <a href="https://www.alignable.com/" rel="noopener noreferrer">Alignable</a>
        <a href="https://www.crunchbase.com/" rel="noopener noreferrer">Crunchbase</a>
        <a href="https://www.fyple.com/" rel="noopener noreferrer">Fyple</a>
        <a href="https://www.iglobal.co/" rel="noopener noreferrer">iGlobal</a>
        <a href="https://www.callupcontact.com/" rel="noopener noreferrer">CallUpContact</a>
        <a href="https://www.showmelocal.com/" rel="noopener noreferrer">ShowMeLocal</a>
        <a href="https://www.ezlocal.com/" rel="noopener noreferrer">EZlocal</a>
        <a href="https://www.infobel.com/" rel="noopener noreferrer">Infobel</a>
        <a href="https://www.tupalo.com/" rel="noopener noreferrer">Tupalo</a>
        <a href="https://www.citysquares.com/" rel="noopener noreferrer">CitySquares</a>
        <a href="https://www.spoke.com/" rel="noopener noreferrer">Spoke</a>
        <a href="https://www.local.com/" rel="noopener noreferrer">Local.com</a>
        <a href="https://www.akama.com/" rel="noopener noreferrer">Akama</a>
        <a href="https://www.bizhwy.com/" rel="noopener noreferrer">BizHwy</a>
        <a href="https://www.foursquare.com/" rel="noopener noreferrer">Foursquare</a>
        <a href="https://www.mapquest.com/" rel="noopener noreferrer">MapQuest</a>
        <a href="https://www.where2go.com/" rel="noopener noreferrer">Where2Go</a>
        <a href="https://www.localstack.com/" rel="noopener noreferrer">LocalStack</a>
        <a href="https://www.bizcommunity.com/" rel="noopener noreferrer">BizCommunity</a>
        <a href="https://www.bunity.com/" rel="noopener noreferrer">Bunity</a>
        <a href="https://www.startus.cc/" rel="noopener noreferrer">StartUs</a>
        <a href="https://www.dexknows.com/" rel="noopener noreferrer">DexKnows</a>
        <a href="https://www.superpages.com/" rel="noopener noreferrer">Superpages</a>
        <a href="https://www.myhuckleberry.com/" rel="noopener noreferrer">MyHuckleberry</a>
        <a href="https://www.2findlocal.com/" rel="noopener noreferrer">2FindLocal</a>
        <a href="https://www.ibegin.com/" rel="noopener noreferrer">iBegin</a>
        <a href="https://www.find-us-here.com/" rel="noopener noreferrer">Find-Us-Here</a>
        <a href="https://www.corporationwiki.com/" rel="noopener noreferrer">CorporationWiki</a>
        <a href="https://www.opendi.com/" rel="noopener noreferrer">Opendi</a>
        <a href="https://www.nextbizthing.com/" rel="noopener noreferrer">NextBizThing</a>
        <a href="https://www.business-listings.com/" rel="noopener noreferrer">Business-Listings</a>
        <a href="https://www.salespider.com/" rel="noopener noreferrer">SalesSpider</a>
        <a href="https://www.elocal.com/" rel="noopener noreferrer">eLocal</a>
        <a href="https://www.b2byellowpages.com/" rel="noopener noreferrer">B2B Yellow Pages</a>
        <a href="https://www.mylocalservices.com/" rel="noopener noreferrer">MyLocalServices</a>
        <a href="https://www.businesslistings.net/" rel="noopener noreferrer">BusinessListings.net</a>
        <a href="https://www.dealerbaba.com/" rel="noopener noreferrer">DealerBaba</a>
        <a href="https://www.businesslistingsusa.com/" rel="noopener noreferrer">BusinessListingsUSA</a>
        <a href="https://www.freelistingusa.com/" rel="noopener noreferrer">FreeListingUSA</a>
        <a href="https://www.uscity.net/" rel="noopener noreferrer">USCity.net</a>
        <a href="https://www.bizwiki.com/" rel="noopener noreferrer">BizWiki</a>
        <a href="https://www.40billion.com/" rel="noopener noreferrer">40Billion</a>
        <a href="https://www.businesslistingplus.com/" rel="noopener noreferrer">BusinessListingPlus</a>
        <a href="https://www.localdatabase.com/" rel="noopener noreferrer">LocalDatabase</a>
        <a href="https://www.bizmakersamerica.org/" rel="noopener noreferrer">BizMakersAmerica</a>
        <a href="https://www.biznet-us.com/" rel="noopener noreferrer">BizNet US</a>
        <a href="https://www.jasminedirectory.com/" rel="noopener noreferrer">Jasmine Directory</a>
        <a href="https://www.curlie.org/" rel="noopener noreferrer">Curlie</a>
        <a href="https://www.business.com/" rel="noopener noreferrer">Business.com</a>
        <a href="https://directoryvault.com/" rel="noopener noreferrer">DirectoryVault</a>
        <a href="https://alistdirectory.com/" rel="noopener noreferrer">AList Directory</a>
        <a href="https://www.reviewcentre.com/" rel="noopener noreferrer">ReviewCentre</a>
        <a href="https://www.merchantcircle.com/" rel="noopener noreferrer">MerchantCircle</a>
        <a href="https://www.yellowbot.com/" rel="noopener noreferrer">YellowBot</a>
        <a href="https://www.insiderpages.com/" rel="noopener noreferrer">InsiderPages</a>
        <a href="https://www.find-open.com/" rel="noopener noreferrer">Find-Open</a>
        {/* — UK Business Directories — */}
        <a href="https://www.yell.com/" rel="noopener noreferrer">Yell</a>
        <a href="https://www.freeindex.co.uk/" rel="noopener noreferrer">FreeIndex</a>
        <a href="https://www.uksmallbusinessdirectory.co.uk/" rel="noopener noreferrer">UK Small Business Directory</a>
        <a href="https://www.businessmagnet.co.uk/" rel="noopener noreferrer">BusinessMagnet</a>
        <a href="https://www.thomsonlocal.com/" rel="noopener noreferrer">Thomson Local</a>
        <a href="https://www.scoot.co.uk/" rel="noopener noreferrer">Scoot</a>
        <a href="https://www.businesslist.co.uk/" rel="noopener noreferrer">BusinessList UK</a>
        <a href="https://www.findtheneedle.co.uk/" rel="noopener noreferrer">FindTheNeedle</a>
        <a href="https://www.approvedbusiness.co.uk/" rel="noopener noreferrer">ApprovedBusiness</a>
        <a href="https://www.192.com/" rel="noopener noreferrer">192.com</a>
        <a href="https://www.business-directory-uk.co.uk/" rel="noopener noreferrer">Business Directory UK</a>
        {/* — Canada Directories — */}
        <a href="https://www.canadaone.com/" rel="noopener noreferrer">CanadaOne</a>
        <a href="https://www.profilecanada.com/" rel="noopener noreferrer">Profile Canada</a>
        <a href="https://www.canpages.ca/" rel="noopener noreferrer">Canpages</a>
        <a href="https://www.n49.com/" rel="noopener noreferrer">N49</a>
        <a href="https://www.ctidirectory.com/" rel="noopener noreferrer">CTI Directory</a>
        <a href="https://www.ourbis.ca/" rel="noopener noreferrer">OurBis</a>
        <a href="https://www.canadianbusinessdirectory.ca/" rel="noopener noreferrer">Canadian Business Directory</a>
        <a href="https://www.canadianplanet.net/" rel="noopener noreferrer">Canadian Planet</a>
        <a href="https://www.canadabusinesslistings.com/" rel="noopener noreferrer">Canada Business Listings</a>
        {/* — European Directories — */}
        <a href="https://www.europages.com/" rel="noopener noreferrer">Europages</a>
        <a href="https://www.europages.co.uk/" rel="noopener noreferrer">Europages UK</a>
        <a href="https://www.europages.fr/" rel="noopener noreferrer">Europages France</a>
        <a href="https://www.europages.es/" rel="noopener noreferrer">Europages Spain</a>
        <a href="https://www.europages.it/" rel="noopener noreferrer">Europages Italy</a>
        <a href="https://www.europages.de/" rel="noopener noreferrer">Europages Germany</a>
        <a href="https://www.kompass.com/" rel="noopener noreferrer">Kompass</a>
        <a href="https://www.exportpages.com/" rel="noopener noreferrer">ExportPages</a>
        <a href="https://www.exporthub.com/" rel="noopener noreferrer">ExportHub</a>
        <a href="https://www.ec21.com/" rel="noopener noreferrer">EC21</a>
        <a href="https://www.tradeindia.com/" rel="noopener noreferrer">TradeIndia</a>
        <a href="https://www.alibaba.com/" rel="noopener noreferrer">Alibaba</a>
        <a href="https://www.made-in-china.com/" rel="noopener noreferrer">Made-in-China</a>
        {/* — Review & Rating Platforms — */}
        <a href="https://clutch.co/" rel="noopener noreferrer">Clutch</a>
        <a href="https://www.goodfirms.co/" rel="noopener noreferrer">GoodFirms</a>
        <a href="https://www.designrush.com/" rel="noopener noreferrer">DesignRush</a>
        <a href="https://www.sitejabber.com/" rel="noopener noreferrer">SiteJabber</a>
        <a href="https://www.trustpilot.com/" rel="noopener noreferrer">Trustpilot</a>
        <a href="https://www.provenexpert.com/" rel="noopener noreferrer">ProvenExpert</a>
        <a href="https://www.zoominfo.com/" rel="noopener noreferrer">ZoomInfo</a>
        <a href="https://www.bbb.org/" rel="noopener noreferrer">Better Business Bureau</a>
        <a href="https://www.dnb.com/" rel="noopener noreferrer">Dun &amp; Bradstreet</a>
        <a href="https://www.applemapsconnect.apple.com/" rel="noopener noreferrer">Apple Maps Connect</a>
        <a href="https://maps.apple.com/place-card/" rel="noopener noreferrer">Apple Maps</a>
        <a href="https://nextdoor.com/business/" rel="noopener noreferrer">Nextdoor</a>
        <a href="https://www.facebook.com/business/" rel="noopener noreferrer">Facebook Business</a>
        {/* — Engineering & Architecture Associations — */}
        <a href="https://www.asce.org/" rel="noopener noreferrer">ASCE</a>
        <a href="https://www.acec.org/" rel="noopener noreferrer">ACEC</a>
        <a href="https://www.nspe.org/" rel="noopener noreferrer">NSPE</a>
        <a href="https://www.aisc.org/" rel="noopener noreferrer">AISC</a>
        <a href="https://www.apwa.net/" rel="noopener noreferrer">APWA</a>
        <a href="https://www.smacna.org/" rel="noopener noreferrer">SMACNA</a>
        <a href="https://www.nahb.org/" rel="noopener noreferrer">NAHB</a>
        <a href="https://www.agc.org/" rel="noopener noreferrer">AGC</a>
        <a href="https://www.aia.org/" rel="noopener noreferrer">AIA</a>
        <a href="https://www.nibs.org/" rel="noopener noreferrer">NIBS</a>
        {/* — Architecture & Design Publications — */}
        <a href="https://www.ribaj.com/" rel="noopener noreferrer">RIBA Journal</a>
        <a href="https://www.archinect.com/" rel="noopener noreferrer">Archinect</a>
        <a href="https://www.archdaily.com/" rel="noopener noreferrer">ArchDaily</a>
        <a href="https://www.architizer.com/" rel="noopener noreferrer">Architizer</a>
        <a href="https://www.archilovers.com/" rel="noopener noreferrer">Archilovers</a>
        <a href="https://www.designboom.com/" rel="noopener noreferrer">Designboom</a>
        <a href="https://www.world-architects.com/" rel="noopener noreferrer">World Architects</a>
        <a href="https://www.architonic.com/" rel="noopener noreferrer">Architonic</a>
        <a href="https://www.archiexpo.com/" rel="noopener noreferrer">ArchiExpo</a>
        <a href="https://www.archello.com/" rel="noopener noreferrer">Archello</a>
        <a href="https://www.designingbuildings.co.uk/" rel="noopener noreferrer">Designing Buildings</a>
        <a href="https://www.aeccafe.com/" rel="noopener noreferrer">AECcafe</a>
        <a href="https://www.sourceable.net/" rel="noopener noreferrer">Sourceable</a>
        <a href="https://www.bdcnetwork.com/" rel="noopener noreferrer">BDC Network</a>
        {/* — BIM & CAD Resources — */}
        <a href="https://www.bimplus.co.uk/" rel="noopener noreferrer">BIM Plus</a>
        <a href="https://www.bimobject.com/" rel="noopener noreferrer">BIMobject</a>
        <a href="https://www.bimsmith.com/" rel="noopener noreferrer">BIMsmith</a>
        <a href="https://www.autodesk.com/" rel="noopener noreferrer">Autodesk</a>
        <a href="https://www.caddetails.com/" rel="noopener noreferrer">CADdetails</a>
        <a href="https://www.caddigest.com/" rel="noopener noreferrer">CADdigest</a>
        <a href="https://www.cadforum.cz/" rel="noopener noreferrer">CADforum</a>
        <a href="https://www.traceparts.com/" rel="noopener noreferrer">TraceParts</a>
        <a href="https://www.3dcontentcentral.com/" rel="noopener noreferrer">3D Content Central</a>
        <a href="https://www.arcat.com/" rel="noopener noreferrer">ARCAT</a>
        <a href="https://www.sweets.construction.com/" rel="noopener noreferrer">Sweets Construction</a>
        <a href="https://www.specifiedby.com/" rel="noopener noreferrer">Specifiedby</a>
        <a href="https://www.cadalyst.com/" rel="noopener noreferrer">Cadalyst</a>
        {/* — Construction Industry — */}
        <a href="https://www.constructconnect.com/" rel="noopener noreferrer">ConstructConnect</a>
        <a href="https://www.dodgeconstruction.com/" rel="noopener noreferrer">Dodge Construction</a>
        <a href="https://www.thebluebook.com/" rel="noopener noreferrer">The Blue Book</a>
        <a href="https://www.construction.com/" rel="noopener noreferrer">Construction.com</a>
        <a href="https://www.buildingconnected.com/" rel="noopener noreferrer">BuildingConnected</a>
        <a href="https://www.constructiondirectory.com/" rel="noopener noreferrer">Construction Directory</a>
        <a href="https://www.constructionbusinessowner.com/" rel="noopener noreferrer">Construction Business Owner</a>
        <a href="https://www.builderspace.com/" rel="noopener noreferrer">BuilderSpace</a>
        <a href="https://www.contractors.com/" rel="noopener noreferrer">Contractors.com</a>
        <a href="https://www.buildingproductdirectory.com/" rel="noopener noreferrer">Building Product Directory</a>
        <a href="https://www.planhub.com/" rel="noopener noreferrer">PlanHub</a>
        <a href="https://www.procore.com/" rel="noopener noreferrer">Procore</a>
        <a href="https://www.buildsshow.com/" rel="noopener noreferrer">Builders Show</a>
        <a href="https://www.contractormag.com/" rel="noopener noreferrer">Contractor Magazine</a>
        <a href="https://www.ecmweb.com/" rel="noopener noreferrer">EC&amp;M Web</a>
        <a href="https://www.concreteconstruction.net/" rel="noopener noreferrer">Concrete Construction</a>
        <a href="https://www.forconstructionpros.com/" rel="noopener noreferrer">For Construction Pros</a>
        <a href="https://www.buildingradar.com/" rel="noopener noreferrer">BuildingRadar</a>
        {/* — Home Services — */}
        <a href="https://www.angi.com/" rel="noopener noreferrer">Angi</a>
        <a href="https://www.homeadvisor.com/" rel="noopener noreferrer">HomeAdvisor</a>
        <a href="https://www.houzz.com/" rel="noopener noreferrer">Houzz</a>
        <a href="https://www.houzz.com/pro" rel="noopener noreferrer">Houzz Pro</a>
        <a href="https://www.houzz.com/professionals" rel="noopener noreferrer">Houzz Professionals</a>
        <a href="https://www.buildzoom.com/" rel="noopener noreferrer">BuildZoom</a>
        <a href="https://www.buildzoom.com/pro" rel="noopener noreferrer">BuildZoom Pro</a>
        <a href="https://www.porch.com/" rel="noopener noreferrer">Porch</a>
        <a href="https://www.fixr.com/" rel="noopener noreferrer">Fixr</a>
        <a href="https://www.bark.com/" rel="noopener noreferrer">Bark</a>
        <a href="https://www.networx.com/" rel="noopener noreferrer">Networx</a>
        {/* — Engineering Resources — */}
        <a href="https://www.engineering.com/" rel="noopener noreferrer">Engineering.com</a>
        <a href="https://www.engineerlive.com/" rel="noopener noreferrer">Engineer Live</a>
        <a href="https://www.engineerjobs.com/" rel="noopener noreferrer">EngineerJobs</a>
        <a href="https://www.engineeringclicks.com/" rel="noopener noreferrer">EngineeringClicks</a>
        <a href="https://www.engineersedge.com/" rel="noopener noreferrer">Engineers Edge</a>
        <a href="https://www.engineersnetwork.org/" rel="noopener noreferrer">Engineers Network</a>
        <a href="https://www.engineeringnewsrecord.com/" rel="noopener noreferrer">Engineering News Record</a>
        <a href="https://www.engineeringcivil.com/" rel="noopener noreferrer">Engineering Civil</a>
        <a href="https://www.enr.com/" rel="noopener noreferrer">ENR</a>
        <a href="https://www.designandbuildwithmetal.com/" rel="noopener noreferrer">Design and Build with Metal</a>
        <a href="https://www.thomasnet.com/" rel="noopener noreferrer">ThomasNet</a>
        <a href="https://www.globalspec.com/" rel="noopener noreferrer">GlobalSpec</a>
        <a href="https://www.macraesbluebook.com/" rel="noopener noreferrer">MacRae's Blue Book</a>
        {/* — Social & Portfolio Platforms — */}
        <a href="https://www.linkedin.com/" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.linkedin.com/company/" rel="noopener noreferrer">LinkedIn Company</a>
        <a href="https://www.glassdoor.com/employers/" rel="noopener noreferrer">Glassdoor</a>
        <a href="https://www.behance.net/" rel="noopener noreferrer">Behance</a>
        <a href="https://dribbble.com/" rel="noopener noreferrer">Dribbble</a>
        <a href="https://about.me/" rel="noopener noreferrer">About.me</a>
        <a href="https://github.com/" rel="noopener noreferrer">GitHub</a>
        <a href="https://gitlab.com/" rel="noopener noreferrer">GitLab</a>
        <a href="https://medium.com/" rel="noopener noreferrer">Medium</a>
        <a href="https://substack.com/" rel="noopener noreferrer">Substack</a>
        <a href="https://speakerdeck.com/" rel="noopener noreferrer">Speaker Deck</a>
        <a href="https://issuu.com/" rel="noopener noreferrer">Issuu</a>
        <a href="https://www.slideshare.net/" rel="noopener noreferrer">SlideShare</a>
        <a href="https://www.producthunt.com/" rel="noopener noreferrer">Product Hunt</a>
        <a href="https://angel.co/" rel="noopener noreferrer">AngelList</a>
        <a href="https://wellfound.com/" rel="noopener noreferrer">Wellfound</a>
        {/* — Texas Local & Regional — */}
        <a href="https://city-tx.com/" rel="noopener noreferrer">City-TX</a>
        <a href="https://city-tx.com/dfw/" rel="noopener noreferrer">City-TX DFW</a>
        <a href="https://city-tx.com/austin/" rel="noopener noreferrer">City-TX Austin</a>
        <a href="https://city-tx.com/central-texas/" rel="noopener noreferrer">City-TX Central Texas</a>
        <a href="https://localsoftexas.com/" rel="noopener noreferrer">Locals of Texas</a>
        <a href="https://localsoftexas.com/directory" rel="noopener noreferrer">Locals of Texas Directory</a>
        <a href="https://localtexasbusiness.com/" rel="noopener noreferrer">Local Texas Business</a>
        <a href="https://texas.bizhwy.com/" rel="noopener noreferrer">Texas BizHwy</a>
        <a href="https://www.chamberofcommerce.com/texas" rel="noopener noreferrer">Chamber of Commerce Texas</a>
        <a href="https://www.manta.com/state/tx" rel="noopener noreferrer">Manta Texas</a>
        <a href="https://www.hotfrog.com/search/us/texas" rel="noopener noreferrer">Hotfrog Texas</a>
        <a href="https://www.ezlocal.com/tx" rel="noopener noreferrer">EZlocal Texas</a>
        <a href="https://www.cylex.us.com/s/texas.html" rel="noopener noreferrer">Cylex Texas</a>
        <a href="https://www.brownbook.net/business-directory/texas-us/" rel="noopener noreferrer">Brownbook Texas</a>
        <a href="https://www.yelp.com/search?find_loc=Texas" rel="noopener noreferrer">Yelp Texas</a>
        <a href="https://www.yellowpages.com/tx" rel="noopener noreferrer">Yellow Pages Texas</a>
        <a href="https://www.superpages.com/texas" rel="noopener noreferrer">Superpages Texas</a>
        <a href="https://www.local.com/texas" rel="noopener noreferrer">Local.com Texas</a>
        <a href="https://www.find-us-here.com/United_States/Texas/" rel="noopener noreferrer">Find-Us-Here Texas</a>
        <a href="https://www.txdirectory.com/" rel="noopener noreferrer">TX Directory</a>
        <a href="https://www.texasbusinessdirectory.com/" rel="noopener noreferrer">Texas Business Directory</a>
        <a href="https://www.texascontractors.org/" rel="noopener noreferrer">Texas Contractors</a>
        <a href="https://www.texaschamber.org/" rel="noopener noreferrer">Texas Chamber</a>
        <a href="https://www.texasconstruction.org/" rel="noopener noreferrer">Texas Construction</a>
        <a href="https://www.txbiz.org/" rel="noopener noreferrer">TXBiz</a>
        {/* — Texas City Chambers — */}
        <a href="https://www.dallaschamber.org/" rel="noopener noreferrer">Dallas Chamber</a>
        <a href="https://www.houston.org/" rel="noopener noreferrer">Houston Chamber</a>
        <a href="https://www.austinchamber.com/" rel="noopener noreferrer">Austin Chamber</a>
        <a href="https://www.sachamber.org/" rel="noopener noreferrer">San Antonio Chamber</a>
        <a href="https://fortworthchamber.com/" rel="noopener noreferrer">Fort Worth Chamber</a>
        <a href="https://www.planochamber.org/" rel="noopener noreferrer">Plano Chamber</a>
        <a href="https://www.irvingchamber.com/" rel="noopener noreferrer">Irving Chamber</a>
        <a href="https://www.arlingtontx.com/" rel="noopener noreferrer">Arlington TX</a>
        <a href="https://www.friscochamber.com/" rel="noopener noreferrer">Frisco Chamber</a>
        <a href="https://www.mckinneychamber.com/" rel="noopener noreferrer">McKinney Chamber</a>
        <a href="https://www.richardsonchamber.com/" rel="noopener noreferrer">Richardson Chamber</a>
        <a href="https://www.garlandchamber.com/" rel="noopener noreferrer">Garland Chamber</a>
        <a href="https://www.dentonchamber.org/" rel="noopener noreferrer">Denton Chamber</a>
        <a href="https://www.lewisvillechamber.org/" rel="noopener noreferrer">Lewisville Chamber</a>
        <a href="https://www.metrocrestchamber.com/" rel="noopener noreferrer">Metrocrest Chamber</a>
        <a href="https://www.grandprairiechamber.org/" rel="noopener noreferrer">Grand Prairie Chamber</a>
        <a href="https://www.conroe.org/" rel="noopener noreferrer">Conroe Chamber</a>
        <a href="https://www.woodlandschamber.org/" rel="noopener noreferrer">Woodlands Chamber</a>
        <a href="https://www.sugarlandtx.gov/" rel="noopener noreferrer">Sugar Land</a>
        <a href="https://www.pearlandchamber.org/" rel="noopener noreferrer">Pearland Chamber</a>
        <a href="https://www.katychamber.com/" rel="noopener noreferrer">Katy Chamber</a>
        <a href="https://www.roundrockchamber.org/" rel="noopener noreferrer">Round Rock Chamber</a>
        <a href="https://www.georgetownchamber.org/" rel="noopener noreferrer">Georgetown Chamber</a>
        <a href="https://www.cedarparkchamber.org/" rel="noopener noreferrer">Cedar Park Chamber</a>
        <a href="https://www.templechamber.com/" rel="noopener noreferrer">Temple Chamber</a>
        <a href="https://www.killeenchamber.com/" rel="noopener noreferrer">Killeen Chamber</a>
        <a href="https://www.wacochamber.com/" rel="noopener noreferrer">Waco Chamber</a>
        <a href="https://www.lubbockchamber.com/" rel="noopener noreferrer">Lubbock Chamber</a>
        <a href="https://www.amarillochamber.org/" rel="noopener noreferrer">Amarillo Chamber</a>
        <a href="https://www.elpaso.org/" rel="noopener noreferrer">El Paso Chamber</a>
        <a href="https://www.corpuschamber.org/" rel="noopener noreferrer">Corpus Christi Chamber</a>
        <a href="https://www.rgvchamber.com/" rel="noopener noreferrer">RGV Chamber</a>
        <a href="https://www.tylertexas.com/" rel="noopener noreferrer">Tyler Texas</a>
        <a href="https://www.longviewchamber.com/" rel="noopener noreferrer">Longview Chamber</a>
        <a href="https://www.bcschamber.org/" rel="noopener noreferrer">Bryan-College Station Chamber</a>
        <a href="https://www.beaumontchamber.org/" rel="noopener noreferrer">Beaumont Chamber</a>
        <a href="https://www.abilenechamber.com/" rel="noopener noreferrer">Abilene Chamber</a>
        <a href="https://www.midlandtxchamber.com/" rel="noopener noreferrer">Midland Chamber</a>
        <a href="https://www.odessachamber.com/" rel="noopener noreferrer">Odessa Chamber</a>
        <a href="https://www.victoriachamber.org/" rel="noopener noreferrer">Victoria Chamber</a>
        <a href="https://www.sanmarcostexas.com/" rel="noopener noreferrer">San Marcos Texas</a>
        <a href="https://www.newbraunfels.org/" rel="noopener noreferrer">New Braunfels Chamber</a>
        <a href="https://www.shermanchamber.us/" rel="noopener noreferrer">Sherman Chamber</a>
        <a href="https://www.texarkana.org/" rel="noopener noreferrer">Texarkana Chamber</a>
        {/* — California Licensing & Associations — */}
        <a href="https://www.cslb.ca.gov/" rel="noopener noreferrer">CSLB California</a>
        <a href="https://web.cslb.ca.gov/onlineservices/dataportal/" rel="noopener noreferrer">CSLB Data Portal</a>
        <a href="https://www.dir.ca.gov/public-works/contractors.html" rel="noopener noreferrer">CA DIR Public Works</a>
        <a href="https://www.agc-ca.org/" rel="noopener noreferrer">AGC California</a>
        <a href="https://www.biaoc.com/" rel="noopener noreferrer">BIA Orange County</a>
        <a href="https://www.cbia.org/" rel="noopener noreferrer">CBIA</a>
        <a href="https://www.calasia.org/" rel="noopener noreferrer">CALASIA</a>
        <a href="https://www.aiacalifornia.org/" rel="noopener noreferrer">AIA California</a>
        <a href="https://www.abcnorcal.org/" rel="noopener noreferrer">ABC NorCal</a>
        <a href="https://www.abcsd.org/" rel="noopener noreferrer">ABC San Diego</a>
        <a href="https://www.abcsocal.org/" rel="noopener noreferrer">ABC SoCal</a>
        <a href="https://www.buildersexchange.com/" rel="noopener noreferrer">Builders Exchange</a>
        <a href="https://www.sbeinc.com/" rel="noopener noreferrer">SBE Inc</a>
        <a href="https://www.constructconnect.com/california/" rel="noopener noreferrer">ConstructConnect California</a>
        <a href="https://www.thebluebook.com/california/" rel="noopener noreferrer">Blue Book California</a>
        <a href="https://www.buildzoom.com/california" rel="noopener noreferrer">BuildZoom California</a>
        <a href="https://www.thumbtack.com/" rel="noopener noreferrer">Thumbtack</a>
        {/* — Texas Engineering & Professional Licensing — */}
        <a href="https://www.texcon.org/" rel="noopener noreferrer">TexCon</a>
        <a href="https://www.texcon.org/texcon/Construction_Industry_Associations.asp" rel="noopener noreferrer">TexCon Industry Associations</a>
        <a href="https://www.texcon.org/texcon/Member_Associations.asp" rel="noopener noreferrer">TexCon Member Associations</a>
        <a href="https://www.texasbuilders.org/" rel="noopener noreferrer">Texas Builders</a>
        <a href="https://www.texasbuilders.org/local-associations/" rel="noopener noreferrer">Texas Builders Local Associations</a>
        <a href="https://www.texoassociation.org/" rel="noopener noreferrer">TEXO Association</a>
        <a href="https://www.acec.org/coalitions-and-chapters" rel="noopener noreferrer">ACEC Coalitions</a>
        <a href="https://www.texasasce.org/" rel="noopener noreferrer">Texas ASCE</a>
        <a href="https://seaot.org/" rel="noopener noreferrer">SEAOT</a>
        <a href="https://pels.texas.gov/" rel="noopener noreferrer">Texas PELS</a>
        <a href="https://pels.texas.gov/roster/firmsearch.html" rel="noopener noreferrer">PELS Firm Search</a>
        <a href="https://pels.texas.gov/lic_app.htm" rel="noopener noreferrer">PELS License Application</a>
        <a href="https://pels.texas.gov/roster/pesearch.html" rel="noopener noreferrer">PELS PE Search</a>
        <a href="https://pels.texas.gov/roster/eng_rosters.html" rel="noopener noreferrer">PELS Engineer Rosters</a>
        <a href="https://pels.texas.gov/downloads.htm" rel="noopener noreferrer">PELS Downloads</a>
        <a href="https://pels.texas.gov/rules.htm" rel="noopener noreferrer">PELS Rules</a>
        <a href="https://pels.texas.gov/lawrules.htm" rel="noopener noreferrer">PELS Law Rules</a>
        <a href="https://pels.texas.gov/ethics-exam/login" rel="noopener noreferrer">PELS Ethics Exam</a>
        <a href="https://pels.texas.gov/roster/eitsearch.html" rel="noopener noreferrer">PELS EIT Search</a>
        <a href="https://engineers.texas.gov/" rel="noopener noreferrer">Texas Engineers Board</a>
        <a href="https://engineers.texas.gov/app/" rel="noopener noreferrer">Texas Engineers App</a>
        <a href="https://ncees.org/" rel="noopener noreferrer">NCEES</a>
        <a href="https://account.ncees.org/" rel="noopener noreferrer">NCEES Account</a>
        <a href="https://ncees.org/exams/pe-exam/" rel="noopener noreferrer">NCEES PE Exam</a>
        <a href="https://ncees.org/exams/fe-exam/" rel="noopener noreferrer">NCEES FE Exam</a>
        <a href="https://www.texas.gov/occupational-professional-licenses-in-texas/" rel="noopener noreferrer">Texas Professional Licenses</a>
        <a href="https://www.mcatexas.org/" rel="noopener noreferrer">MCA Texas</a>
        <a href="https://www.asaonline.com/" rel="noopener noreferrer">ASA Online</a>
        <a href="https://www.ctsaonline.org/" rel="noopener noreferrer">CTSA Online</a>
        <a href="https://www.dacadfw.org/" rel="noopener noreferrer">DACA DFW</a>
        <a href="https://www.fscatx.org/" rel="noopener noreferrer">FSCA Texas</a>
        <a href="https://www.sam-dfw.org/" rel="noopener noreferrer">SAM DFW</a>
        <a href="https://www.ashrae.org/" rel="noopener noreferrer">ASHRAE</a>
        <a href="https://www.asme.org/" rel="noopener noreferrer">ASME</a>
        <a href="https://www.ieee.org/" rel="noopener noreferrer">IEEE</a>
        <a href="https://www.spe.org/" rel="noopener noreferrer">SPE</a>
        <a href="https://www.tamest.org/" rel="noopener noreferrer">TAMEST</a>
        {/* — CAD & Drafting Services — */}
        <a href="https://caddrafters.us/locations/texas/" rel="noopener noreferrer">CAD Drafters Texas</a>
        <a href="https://caddrafters.us/locations/texas/houston/" rel="noopener noreferrer">CAD Drafters Houston</a>
        <a href="https://caddrafters.us/locations/texas/dallas/" rel="noopener noreferrer">CAD Drafters Dallas</a>
        <a href="https://caddrafters.us/locations/texas/austin/" rel="noopener noreferrer">CAD Drafters Austin</a>
        <a href="https://caddrafters.us/locations/texas/san-antonio/" rel="noopener noreferrer">CAD Drafters San Antonio</a>
        <a href="https://caddrafters.us/locations/texas/fort-worth/" rel="noopener noreferrer">CAD Drafters Fort Worth</a>
        <a href="https://caddrafters.us/locations/texas/arlington/" rel="noopener noreferrer">CAD Drafters Arlington</a>
        <a href="https://caddrafters.us/locations/texas/shop-drawings/" rel="noopener noreferrer">CAD Drafters Shop Drawings Texas</a>
        <a href="https://caddrafters.us/locations/texas/houston/shop-drawings/" rel="noopener noreferrer">CAD Drafters Shop Drawings Houston</a>
        <a href="https://www.drafters-drafting.com/" rel="noopener noreferrer">Drafters Drafting</a>
        <a href="https://www.drafters-drafting.com/drafting/Houston-TX.aspx" rel="noopener noreferrer">Drafters Drafting Houston</a>
        <a href="https://homedrafters.com/cad-services/" rel="noopener noreferrer">Home Drafters CAD Services</a>
        <a href="https://topdwgllc.com/" rel="noopener noreferrer">TopDWG LLC</a>
        <a href="https://www.quinterodesign.com/" rel="noopener noreferrer">Quintero Design</a>
        <a href="https://archidrafters.com/" rel="noopener noreferrer">ArchiDrafters</a>
        {/* — San Jose Local — */}
        <a href="https://web.sjchamber.com/directory" rel="noopener noreferrer">San Jose Chamber Directory</a>
        <a href="https://web.sjchamber.com/directory/Search/civil-engineering-240466" rel="noopener noreferrer">San Jose Chamber Civil Engineering</a>
        <a href="https://www.sanjoseca.gov/businesses/development-services-permit-center/about-building-permits/plans-that-require-an-architect-or-engineer" rel="noopener noreferrer">San Jose Building Permits</a>
        <a href="https://www.sanjoseca.gov/your-government/departments-offices/planning-building-code-enforcement/planning-division/maps-commonly-used-for-planning/neighborhood-and-business-associations" rel="noopener noreferrer">San Jose Business Associations</a>
        <a href="https://www.bbb.org/us/ca/san-jose/category/drafting-services" rel="noopener noreferrer">BBB San Jose Drafting</a>
        {/* — San Diego Local — */}
        <a href="https://www.sandiego.gov/ecp/edocref" rel="noopener noreferrer">San Diego eDocRef</a>
        <a href="https://www.sandiego.gov/ecp/edocref/drawings" rel="noopener noreferrer">San Diego eDoc Drawings</a>
        <a href="https://www.sandiego.gov/business" rel="noopener noreferrer">San Diego Business</a>
        <a href="https://www.sandiego.gov/development-services" rel="noopener noreferrer">San Diego Development Services</a>
        <a href="https://www.sandiego.gov/planning" rel="noopener noreferrer">San Diego Planning</a>
        <a href="https://www.sandiegochamber.org/" rel="noopener noreferrer">San Diego Chamber</a>
        <a href="https://www.sandiegoregionaledc.org/" rel="noopener noreferrer">San Diego Regional EDC</a>
        <a href="https://www.bbb.org/local-bbb/bbb-serving-the-pacific-southwest" rel="noopener noreferrer">BBB Pacific Southwest</a>
        {/* — Texas Bid Networks & Virtual Exchanges — */}
        <a href="https://www.virtualbx.com/" rel="noopener noreferrer">VirtualBX</a>
        <a href="https://www.txbidnetwork.com/" rel="noopener noreferrer">TX Bid Network</a>
        <a href="https://www.bidclerk.com/" rel="noopener noreferrer">BidClerk</a>
        <a href="https://www.constructionjournal.com/" rel="noopener noreferrer">Construction Journal</a>
        <a href="https://www.zabalist.com/" rel="noopener noreferrer">Zabalist</a>
        <a href="https://www.ccrta.org/enterprise/directories" rel="noopener noreferrer">CCRTA Directories</a>
        {/* — Texas Construction & Industry Associations — */}
        <a href="https://www.acectx.org/" rel="noopener noreferrer">ACEC Texas</a>
        <a href="https://www.agctx.org/" rel="noopener noreferrer">AGC Texas</a>
        <a href="https://www.texoassociation.org/" rel="noopener noreferrer">TEXO Association</a>
        <a href="https://www.ucatx.org/" rel="noopener noreferrer">UCA Texas</a>
        <a href="https://www.abctxgulfcoast.org/" rel="noopener noreferrer">ABC Texas Gulf Coast</a>
        <a href="https://www.abc.org/" rel="noopener noreferrer">ABC National</a>
        <a href="https://www.sam-dfw.org/" rel="noopener noreferrer">SAM DFW</a>
        <a href="https://www.tamacc.org/" rel="noopener noreferrer">TAMACC</a>
        <a href="https://www.hbatexas.com/" rel="noopener noreferrer">HBA Texas</a>
        <a href="https://thsalliance.com/" rel="noopener noreferrer">THS Alliance</a>
        <a href="https://members.namctexas.org/memberdirectory" rel="noopener noreferrer">NAMC Texas Member Directory</a>
        <a href="https://www.builderfusion.com/" rel="noopener noreferrer">Builder Fusion</a>
        <a href="https://www.fortworthbuilders.org/" rel="noopener noreferrer">Fort Worth Builders</a>
        <a href="https://www.texas.org/business/" rel="noopener noreferrer">Texas.org Business</a>
        {/* — AIA City Chapters — */}
        <a href="https://www.aiadallas.org/" rel="noopener noreferrer">AIA Dallas</a>
        <a href="https://www.aiaaustin.org/" rel="noopener noreferrer">AIA Austin</a>
        <a href="https://www.aiahouston.org/" rel="noopener noreferrer">AIA Houston</a>
        <a href="https://www.aiasanantonio.org/" rel="noopener noreferrer">AIA San Antonio</a>
        {/* — Texas Home Builders Associations — */}
        <a href="https://www.ghba.org/" rel="noopener noreferrer">Greater Houston Builders</a>
        <a href="https://www.dallasbuilders.com/" rel="noopener noreferrer">Dallas Builders</a>
        <a href="https://www.hbaaustin.com/" rel="noopener noreferrer">HBA Austin</a>
        <a href="https://www.sabuilders.com/" rel="noopener noreferrer">SA Builders</a>
        <a href="https://www.greaterfortworthbuilders.com/" rel="noopener noreferrer">Greater Fort Worth Builders</a>
        <a href="https://www.coastalbendhba.com/" rel="noopener noreferrer">Coastal Bend HBA</a>
        <a href="https://www.elpasobuilders.com/" rel="noopener noreferrer">El Paso Builders</a>
        <a href="https://www.permianbasinbuilders.com/" rel="noopener noreferrer">Permian Basin Builders</a>
        <a href="https://www.westtexashba.com/" rel="noopener noreferrer">West Texas HBA</a>
        {/* — Texas Builders Association Member Directories — */}
        <a href="https://members.texasbuilders.org/builder-directory" rel="noopener noreferrer">Texas Builders Directory</a>
        <a href="https://members.texasbuilders.org/associate-directory" rel="noopener noreferrer">Texas Builders Associate Directory</a>
        <a href="https://members.texasbuilders.org/builder-directory/Find" rel="noopener noreferrer">Texas Builders Find</a>
        <a href="https://members.texasbuilders.org/associate-directory/Search/commercial-general-contracting-130905" rel="noopener noreferrer">Texas Builders General Contracting</a>
        {/* — San Antonio Local Directories & City Portals — */}
        <a href="https://business.sachamber.org/memberdirectory" rel="noopener noreferrer">SA Chamber Member Directory</a>
        <a href="https://business.sachamber.org/memberdirectory/Search/engineering-481230" rel="noopener noreferrer">SA Chamber Engineering Directory</a>
        <a href="https://web.sanantonioagc.org/search" rel="noopener noreferrer">San Antonio AGC Search</a>
        <a href="https://www.saabe.org/" rel="noopener noreferrer">SAABE</a>
        <a href="https://www.saabe.org/directory.html" rel="noopener noreferrer">SAABE Directory</a>
        <a href="https://aiasa.org/belong/allied-member-directory/" rel="noopener noreferrer">AIA San Antonio Allied Members</a>
        <a href="https://www.asasanantonio.org/membership-directory" rel="noopener noreferrer">ASA San Antonio Directory</a>
        <a href="https://www.sa.gov/Directory/Departments/DSD/Contractor/Find-a-Contractor" rel="noopener noreferrer">SA City Find a Contractor</a>
        <a href="https://www.sa.gov/Directory/Departments/DSD/Contractor" rel="noopener noreferrer">SA City Contractor Portal</a>
        <a href="https://www.sa.gov/Directory/Departments/DSD/Constructing/Residential" rel="noopener noreferrer">SA City Residential Construction</a>
        <a href="https://www.sa.gov/Directory/Departments/NHSD/Affordable-Housing/Casita-Program/Resources/Contractor/Contractor-List" rel="noopener noreferrer">SA City Casita Contractor List</a>
      </div>

      <div className="container">
        
        {/* Massive 4-Column Layout */}
        <div style={styles.grid}>
          {/* Column 1: Brand details & Accreditations */}
          <div style={styles.colLarge}>
            <Link to="/" style={styles.logoBox} className="logo-hover-rotate">
              <img src="/logo.png" alt="PRIMECOST Logo" style={styles.logoImg} loading="lazy" />
            </Link>
            <p style={styles.aboutText}>
              Delivering high-end architectural drawings, structural calculations, MEP schematics, BIM models, and pre-construction bidding packages. Engineering your vision with precision since 2005.
            </p>
            
            {/* Trust Reviews Badge */}
            <div style={styles.reviewsBadge} className="glass-panel">
              <div style={{ display: 'flex', gap: '2px', color: '#C89A45' }}>
                <Star size={14} fill="#C89A45" />
                <Star size={14} fill="#C89A45" />
                <Star size={14} fill="#C89A45" />
                <Star size={14} fill="#C89A45" />
                <Star size={14} fill="#C89A45" />
              </div>
              <span style={styles.reviewsText}>
                <strong>4.9/5 Rating</strong> on Google Reviews
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={styles.col}>
            <h4 style={styles.heading}>Services</h4>
            <ul style={styles.list}>
              <li><Link to="/services/structural-engineering" style={styles.link}>Structural Engineering</Link></li>
              <li><Link to="/services/sign-stamp-services" style={styles.link}>Sign & Stamp Services</Link></li>
              <li><Link to="/services/permit-correction" style={styles.link}>Permit Correction</Link></li>
              <li><Link to="/services/architectural-design" style={styles.link}>Architectural Design</Link></li>
              <li><Link to="/services/mep-engineering" style={styles.link}>MEP Engineering</Link></li>
              <li><Link to="/services/bim-cad" style={styles.link}>BIM & CAD Drafting</Link></li>
            </ul>
          </div>

          {/* Column 3: Corporate Info & Social links */}
          <div style={styles.col}>
            <h4 style={styles.heading}>Quick Links</h4>
            <ul style={styles.list}>
              <li><Link to="/about" style={styles.link}>About Us</Link></li>
              <li><Link to="/portfolio" style={styles.link}>Case Studies</Link></li>
              <li><Link to="/pricing" style={styles.link}>Service Pricing</Link></li>
              <li><Link to="/service-areas" style={styles.link}>Service Areas</Link></li>
              <li><Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" style={styles.link}>Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Address, Hours, & Contact details */}
          <div style={styles.colLarge}>
            <h4 style={styles.heading}>Contact & Location</h4>
            <div style={styles.contactDetails}>
              <div style={styles.contactItem}>
                <MapPin size={16} style={styles.icon} />
                <span>440 Louisiana St, Suite 900, Houston, TX 77002</span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={16} style={styles.icon} />
                <div>
                  <a href="tel:+18322346456" style={styles.link}>Main: (832) 234-6456</a><br />
                  <a href="tel:+17472237816" style={styles.link}>Corporate: (747) 223-7816</a>
                </div>
              </div>
              <div style={styles.contactItem}>
                <Mail size={16} style={styles.icon} />
                <a href="mailto:Frank.moore@primecost.biz" style={styles.link}>Frank.moore@primecost.biz</a>
              </div>
              <div style={styles.contactItem}>
                <Clock size={16} style={styles.icon} />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations and trust badges bar */}
        <div style={styles.midSection}>
          <div style={styles.badges}>
            <div style={styles.badgeItem}>
              <Award size={18} style={{ color: '#C89A45' }} />
              <span>AIA Member Firm</span>
            </div>
            <div style={styles.badgeItem}>
              <ShieldCheck size={18} style={{ color: '#C89A45' }} />
              <span>Licensed PE (Active in 50 States)</span>
            </div>
            <div style={styles.badgeItem}>
              <FileText size={18} style={{ color: '#C89A45' }} />
              <span>BIM Autodesk Certified</span>
            </div>
          </div>
          
          <div style={styles.logoRow}>
            <img src="/bbb.png" alt="BBB Accredited" style={styles.badgeImg} loading="lazy" />
            <img src="/yelp.png" alt="Yelp Rated" style={styles.badgeImgYelp} loading="lazy" />
          </div>
        </div>

        {/* Bottom copyright section */}
        <div style={styles.bottomSection}>
          <p>© 2004 PRIMECOST (PrimeCost Engineering & Design LLC). All rights reserved.</p>
          <div style={styles.bottomLinks}>
            <span onClick={onOpenProposal} style={styles.footerCta}>Request Scoping Bid</span>
            <span>•</span>
            <span onClick={onOpenConsultation} style={styles.footerCta}>Schedule Free Call</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#071328', // Extremely rich dark navy
    color: '#94a3b8',
    padding: '5rem 0 3rem 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    fontSize: '0.88rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr',
    gap: '3rem',
    marginBottom: '3rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  colLarge: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  logoBox: {
    display: 'inline-block',
  },
  logoImg: {
    height: '58px',
    borderRadius: '4px',
    backgroundColor: '#ffffff',
    padding: '2px',
  },
  aboutText: {
    lineHeight: '1.6',
    color: '#cbd5e1',
  },
  reviewsBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.6rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '8px',
    width: 'fit-content'
  },
  reviewsText: {
    fontSize: '0.75rem',
    color: '#ffffff'
  },
  heading: {
    color: '#ffffff',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.1rem',
    fontWeight: '700',
    position: 'relative',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #C89A45',
    alignSelf: 'flex-start',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  link: {
    color: '#94a3b8',
    transition: 'color 0.2s',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    lineHeight: '1.5',
  },
  icon: {
    color: '#C89A45',
    marginTop: '0.15rem',
    flexShrink: 0,
  },
  midSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    padding: '2rem 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    marginBottom: '2rem',
  },
  badges: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  badgeItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#cbd5e1',
    fontWeight: '500',
    fontSize: '0.82rem',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  badgeImg: {
    height: '45px',
    width: 'auto',
    borderRadius: '4px',
  },
  badgeImgYelp: {
    height: '40px',
    width: 'auto',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    padding: '2px',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    fontSize: '0.8rem',
    color: '#64748b',
  },
  bottomLinks: {
    display: 'flex',
    gap: '0.75rem',
  },
  footerCta: {
    cursor: 'pointer',
    color: '#C89A45',
    fontWeight: '600',
  },
  visuallyHidden: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },
};

// Add responsive styles dynamically
if (typeof document !== 'undefined') {
  const footerStyles = `
    @media (max-width: 991px) {
      footer div.container > div:first-child {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 2rem !important;
      }
    }
    @media (max-width: 600px) {
      footer div.container > div:first-child {
        grid-template-columns: 1fr !important;
      }
      footer div.container > div:nth-child(2) {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 1.5rem !important;
      }
    }
    footer a:hover {
      color: #C89A45 !important;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = footerStyles;
  document.head.appendChild(styleSheet);
}
export { styles };
