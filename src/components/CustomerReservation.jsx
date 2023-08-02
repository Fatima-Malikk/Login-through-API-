import React, { useState } from 'react';
import axios from 'axios';
import './CustomerReservation.css'

const CustomerReservation = () => {
  const [formData, setFormData] = useState({
    Oracle_Customer_Number: "",
    Oracle_Customer_Exists: "",
    status: "A",
    country_of_residence: "",
    city: "ABC",
    telephone_type: "",
    phone_country_code: "966",
    phone_area_code: "",
    phone_number: "594468058",
    alt_telephone_type: "",
    alt_phone_country_code: "",
    alt_phone_area_code: "",
    alt_phone_number: "",
    email_address: "hamad2k9@gmail.com",
    secondary_email_address: "",
    website: "",
    lead_id: "64",
    lead_source: "Broker",
    source_details: "",
    remarks: "",
    broker_id: "5176",
    title: "",
    first_name: "ALok",
    middle_name: "",
    last_name: "UAT",
    customer_name: "ALok UAT",
    arabic_customer_name: "",
    nationality: "SA",
    date_of_birth: "10/23/2022",
    hijri_date_of_birth: "",
    gender: "M",
    customer_id_type: "NATIONAL ID",
    id_number: "2413741915",
    id_issue_date: "",
    hijri_id_issue_date: "",
    id_expiry_date: "",
    hijri_id_expiry_date: "",
    place_of_issue: "",
    passport_number: "",
    passport_issue_date: "",
    passport_expiry_date: "",
    home_address1: "",
    home_address2: "",
    home_address3: "",
    home_city: "ABC",
    home_state: "ABC",
    home_country: "",
    home_po_box: "",
    home_postal_code: "",
    office_address1: "",
    office_address2: "",
    office_address3: "",
    office_city: "",
    office_state: "",
    office_country: "",
    office_po_box: "",
    office_postal_code: "",
    arabic_address_line1: "",
    arabic_address_line2: "",
    arabic_address_line3: "",
    arabic_city: "",
    arabic_state: "",
    arabic_country: "",
    arabic_po_box: "",
    arabic_postal_code: "",
    creation_date: "10/23/2022",
    created_by: "",
    last_update_date: "10/23/2022",
    last_updated_by: "",
    customer_type: "Individual",
    owner_pct: "100",
    primary_owner: "Y",
    // Reservation
    Oracle_Reservation_Number: "",
    registration_id: "64",
    org_id: "928",
    version_no: "1",
    registration_date: "10/23/2022",
    //status: "3",
    payment_plan_id: "",
    sale_type: "",
    payment_mode: "",
    billing_owner: "",
    token_deposit_amount: "",
    down_payment_amount: "583457",
    payment_type_id: "1",
    total_unit_price: "583457",
    discount_pct: "",
    discount: "",
    net_price: "583457",
    gross_unit_price: "583457",
    property_id: "24",
    office_section_id: "4702",
    saleable_area_sqft: "",
    unit_rate_sqft: "",
    saleable_area_sqm: "222.1",
    unit_rate_sqm: "583457",
    bank_account_type_code: "",
    bank_name: "",
    bank_account_iban: "",
    bank_account: "",
    promotion_id: "",
    promotion_offer_dtls: "",
    comments: "",
    VAT_RETT_Amount: "583457",
    salesrep_id: "ARK001776", //PC
    salesrep_manager_id: "", //Sales Manager
    salesrep_director_id: "", //Director
    release_id: "20980",
    building_land_id: "19312",
    floor_parcel_id: "19353",
    confirm_flag: "",
    payment_method: "",
    charge_type: "",
    receipt_number: "64",
    cheque_date: "",
    currency_code: "",
    exchange_rate: "",
    exchange_rate_type: "",
    exchange_rate_date: "",
    receipt_amount: "208",
    location_id: null,
    sale_admin_id: "ARK001222",
    payment_term: "C",
    Mortgage_Employee_name: "ABC",
    Mortgage_Employee_contact: "05984984",
    DAAR_English_Lender_Name: "AD",
    DAAAR_Arabic_Lender: "",
    RETT_VAT_Exemption: "Y",
    RETT_VAT_Reimbursement_Certificate_Number: "213456",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [currentStep, setCurrentStep] = useState(1);
  const handleNavigation = (step) => {
    setCurrentStep(step);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://daarconn-dev.alarkan.com/oracle/createcustomerreservation',
        formData
      );
      console.log('Data successfully submitted:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  const [minimizedSections, setMinimizedSections] = useState({
    'contact-details': false,
    'basic-details': false,
    'identification-details': false,
    'address-details': false,
    'payment-details': false,
    'additional-details': false,
  });
  const handleSectionMinimize = (section) => {
    setMinimizedSections((prevMinimizedSections) => ({
      ...prevMinimizedSections,
      [section]: !prevMinimizedSections[section],
    }));
  };


  return (
    <div className="customer-tab">
      
      <div className="step-header">
       <h2>Step {currentStep}/6 : Customer Information</h2> 
      </div>
      <div className="navigation-bar">
        <ul>
          <a href="#contact-details" onClick={() => handleNavigation(1)}>Contact Details</a>
          <a href="#basic-details" onClick={() => handleNavigation(2)}>Basic Details</a>
          <a href="#identification-details" onClick={() => handleNavigation(3)}>Identification Details</a>
          <a href="#address-details" onClick={() => handleNavigation(4)}>Address Details</a>
          <a href="#additional-details" onClick={() => handleNavigation(6)}>Additional Details</a>
          <hr /></ul>
       
      </div>

      <div className="section"  id="contact-details">
        <h2>Contact Details</h2> 
        <div
          className={`section-arrow ${minimizedSections['contact-details'] ? 'minimized' : ''}`}
          onClick={() => handleSectionMinimize('contact-details')}
        >
          ▼
        </div>
          
        <hr />
        
        {!minimizedSections['contact-details'] && (
          <div className="section-content">
            <div className="form-group">
        
          <label>Oracle Customer Number</label>
          <input
            type="text"
            name="Oracle_Customer_Number"
            value={formData.Oracle_Customer_Number}
            onChange={handleInputChange}
          />
          </div>
          <div className="form-group">
          <label>Oracle Customer Exists</label>
          <input
            type="text"
            name="Oracle_Customer_Exists"
            value={formData.Oracle_Customer_Exists}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Country of Residence</label>
          <input
            type="text"
            name="country_of_residence"
            value={formData.country_of_residence}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Telephone Type</label>
          <input
            type="text"
            name="telephone_type"
            value={formData.telephone_type}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Country Code</label>
          <input
            type="text"
            name="phone_country_code"
            value={formData.phone_country_code}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Alternative Telephone Type</label>
          <input
            type="text"
            name="alt_telephone_type"
            value={formData.alt_telephone_type}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Alternative Phone Country Code</label>
          <input
            type="text"
            name="alt_phone_country_code"
            value={formData.alt_phone_country_code}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Alternative Phone Area Code</label>
          <input
            type="text"
            name="alt_phone_area_code"
            value={formData.alt_phone_area_code}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Alternative Phone Number</label>
          <input
            type="text"
            name="alt_phone_number"
            value={formData.alt_phone_number}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            name="email_address"
            value={formData.email_address}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Secondary Email Address</label>
          <input
            type="text"
            name="secondary_email_address"
            value={formData.secondary_email_address}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Lead ID</label>
          <input
            type="text"
            name="lead_id"
            value={formData.lead_id}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Lead Source</label>
          <input
            type="text"
            name="lead_source"
            value={formData.lead_source}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Source Details</label>
          <input
            type="text"
            name="source_details"
            value={formData.source_details}
            onChange={handleInputChange}
          /></div>
          <div className="form-group">
          <label>Remarks</label>
          <input
            type="text"
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Broker ID</label>
          <input
            type="text"
            name="broker_id"
            value={formData.broker_id}
            onChange={handleInputChange}
          />
       </div></div>
      
      )}
</div>

      <div className="section" id="basic-details">
        <h3>Basic Details</h3>
        <div
          className={`section-arrow ${minimizedSections['contact-details'] ? 'minimized' : ''}`}
          onClick={() => handleSectionMinimize('contact-details')}
        >
          ▼
        </div>
          
        <hr />
        
        {!minimizedSections['contact-details'] && (
          <div className="section-content">
        
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Middle Name</label>
          <input
            type="text"
            name="middle_name"
            value={formData.middle_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Arabic Customer Name</label>
          <input
            type="text"
            name="arabic_customer_name"
            value={formData.arabic_customer_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Nationality</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="text"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Hijri Date of Birth</label>
          <input
            type="text"
            name="hijri_date_of_birth"
            value={formData.hijri_date_of_birth}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
        </div>
      </div>)}
      </div>

      <div className="section " id="identification-details">
        <h3>Identification Details</h3>
        <hr /><div className="form-group">
          <label>Customer ID Type</label>
          <input
            type="text"
            name="customer_id_type"
            value={formData.customer_id_type}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>ID Number</label>
          <input
            type="text"
            name="id_number"
            value={formData.id_number}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>ID Issue Date</label>
          <input
            type="text"
            name="id_issue_date"
            value={formData.id_issue_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Hijri ID Issue Date</label>
          <input
            type="text"
            name="hijri_id_issue_date"
            value={formData.hijri_id_issue_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>ID Expiry Date</label>
          <input
            type="text"
            name="id_expiry_date"
            value={formData.id_expiry_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Hijri ID Expiry Date</label>
          <input
            type="text"
            name="hijri_id_expiry_date"
            value={formData.hijri_id_expiry_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Place of Issue</label>
          <input
            type="text"
            name="place_of_issue"
            value={formData.place_of_issue}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Passport Number</label>
          <input
            type="text"
            name="passport_number"
            value={formData.passport_number}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Passport Issue Date</label>
          <input
            type="text"
            name="passport_issue_date"
            value={formData.passport_issue_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Passport Expiry Date</label>
          <input
            type="text"
            name="passport_expiry_date"
            value={formData.passport_expiry_date}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="section" id="address-details">
        <h3>Home Address</h3>
        <hr /><div className="form-group">
          <label>Home Address 1</label>
          <input
            type="text"
            name="home_address1"
            value={formData.home_address1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Home Address 2</label>
          <input
            type="text"
            name="home_address2"
            value={formData.home_address2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Home Address 3</label>
          <input
            type="text"
            name="home_address3"
            value={formData.home_address3}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Home City</label>
          <input
            type="text"
            name="home_city"
            value={formData.home_city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Home State</label>
          <input
            type="text"
            name="home_state"
            value={formData.home_state}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Home Country</label>
          <input
            type="text"
            name="home_country"
            value={formData.home_country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Home PO Box</label>
          <input
            type="text"
            name="home_po_box"
            value={formData.home_po_box}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Home Postal Code</label>
          <input
            type="text"
            name="home_postal_code"
            value={formData.home_postal_code}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="section" >
        <h3>Office Address</h3>
        <div className="form-group">
          <label>Office Address 1</label>
          <input
            type="text"
            name="office_address1"
            value={formData.office_address1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Office Address 2</label>
          <input
            type="text"
            name="office_address2"
            value={formData.office_address2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Office Address 3</label>
          <input
            type="text"
            name="office_address3"
            value={formData.office_address3}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Office City</label>
          <input
            type="text"
            name="office_city"
            value={formData.office_city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Office State</label>
          <input
            type="text"
            name="office_state"
            value={formData.office_state}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Office Country</label>
          <input
            type="text"
            name="office_country"
            value={formData.office_country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Office PO Box</label>
          <input
            type="text"
            name="office_po_box"
            value={formData.office_po_box}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Office Postal Code</label>
          <input
            type="text"
            name="office_postal_code"
            value={formData.office_postal_code}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="section">
        <h3>Arabic Address</h3>
        <div className="form-group">
          <label>Arabic Address Line 1</label>
          <input
            type="text"
            name="arabic_address_line1"
            value={formData.arabic_address_line1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Arabic Address Line 2</label>
          <input
            type="text"
            name="arabic_address_line2"
            value={formData.arabic_address_line2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Arabic Address Line 3</label>
          <input
            type="text"
            name="arabic_address_line3"
            value={formData.arabic_address_line3}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Arabic City</label>
          <input
            type="text"
            name="arabic_city"
            value={formData.arabic_city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Arabic State</label>
          <input
            type="text"
            name="arabic_state"
            value={formData.arabic_state}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Arabic Country</label>
          <input
            type="text"
            name="arabic_country"
            value={formData.arabic_country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Arabic PO Box</label>
          <input
            type="text"
            name="arabic_po_box"
            value={formData.arabic_po_box}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Arabic Postal Code</label>
          <input
            type="text"
            name="arabic_postal_code"
            value={formData.arabic_postal_code}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="section" id="additional-details">
      <hr /><h3>Additional Details</h3>
        <div className="form-group">
          <label>Creation Date</label>
          <input
            type="text"
            name="creation_date"
            value={formData.creation_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Created By</label>
          <input
            type="text"
            name="created_by"
            value={formData.created_by}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Last Update Date</label>
          <input
            type="text"
            name="last_update_date"
            value={formData.last_update_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Last Updated By</label>
          <input
            type="text"
            name="last_updated_by"
            value={formData.last_updated_by}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Customer Type</label>
          <input
            type="text"
            name="customer_type"
            value={formData.customer_type}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Owner Percentage</label>
          <input
            type="text"
            name="owner_pct"
            value={formData.owner_pct}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Primary Owner</label>
          <input
            type="text"
            name="primary_owner"
            value={formData.primary_owner}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="section" id="reservation-details">
        <h3>Reservation Details</h3>
        <div className="form-group">
          <label>Oracle Reservation Number</label>
          <input
            type="text"
            name="Oracle_Reservation_Number"
            value={formData.Oracle_Reservation_Number}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Registration ID</label>
          <input
            type="text"
            name="registration_id"
            value={formData.registration_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Org ID</label>
          <input
            type="text"
            name="org_id"
            value={formData.org_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Version No</label>
          <input
            type="text"
            name="version_no"
            value={formData.version_no}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Registration Date</label>
          <input
            type="text"
            name="registration_date"
            value={formData.registration_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Payment Plan ID</label>
          <input
            type="text"
            name="payment_plan_id"
            value={formData.payment_plan_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Sale Type</label>
          <input
            type="text"
            name="sale_type"
            value={formData.sale_type}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Payment Mode</label>
          <input
            type="text"
            name="payment_mode"
            value={formData.payment_mode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Billing Owner</label>
          <input
            type="text"
            name="billing_owner"
            value={formData.billing_owner}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Token Deposit Amount</label>
          <input
            type="text"
            name="token_deposit_amount"
            value={formData.token_deposit_amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Down Payment Amount</label>
          <input
            type="text"
            name="down_payment_amount"
            value={formData.down_payment_amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Payment Type ID</label>
          <input
            type="text"
            name="payment_type_id"
            value={formData.payment_type_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Total Unit Price</label>
          <input
            type="text"
            name="total_unit_price"
            value={formData.total_unit_price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Discount Percentage</label>
          <input
            type="text"
            name="discount_pct"
            value={formData.discount_pct}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Discount</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Net Price</label>
          <input
            type="text"
            name="net_price"
            value={formData.net_price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Gross Unit Price</label>
          <input
            type="text"
            name="gross_unit_price"
            value={formData.gross_unit_price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Property ID</label>
          <input
            type="text"
            name="property_id"
            value={formData.property_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Office Section ID</label>
          <input
            type="text"
            name="office_section_id"
            value={formData.office_section_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Saleable Area (sqft)</label>
          <input
            type="text"
            name="saleable_area_sqft"
            value={formData.saleable_area_sqft}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Unit Rate (sqft)</label>
          <input
            type="text"
            name="unit_rate_sqft"
            value={formData.unit_rate_sqft}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Saleable Area (sqm)</label>
          <input
            type="text"
            name="saleable_area_sqm"
            value={formData.saleable_area_sqm}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Unit Rate (sqm)</label>
          <input
            type="text"
            name="unit_rate_sqm"
            value={formData.unit_rate_sqm}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Bank Account Type Code</label>
          <input
            type="text"
            name="bank_account_type_code"
            value={formData.bank_account_type_code}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Bank Name</label>
          <input
            type="text"
            name="bank_name"
            value={formData.bank_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Bank Account IBAN</label>
          <input
            type="text"
            name="bank_account_iban"
            value={formData.bank_account_iban}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Bank Account</label>
          <input
            type="text"
            name="bank_account"
            value={formData.bank_account}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Promotion ID</label>
          <input
            type="text"
            name="promotion_id"
            value={formData.promotion_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Promotion Offer Details</label>
          <input
            type="text"
            name="promotion_offer_dtls"
            value={formData.promotion_offer_dtls}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Comments</label>
          <input
            type="text"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>VAT/RETT Amount</label>
          <input
            type="text"
            name="VAT_RETT_Amount"
            value={formData.VAT_RETT_Amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Sales Rep ID (PC)</label>
          <input
            type="text"
            name="salesrep_id"
            value={formData.salesrep_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Sales Rep Manager ID</label>
          <input
            type="text"
            name="salesrep_manager_id"
            value={formData.salesrep_manager_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Sales Rep Director ID</label>
          <input
            type="text"
            name="salesrep_director_id"
            value={formData.salesrep_director_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Release ID</label>
          <input
            type="text"
            name="release_id"
            value={formData.release_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Building Land ID</label>
          <input
            type="text"
            name="building_land_id"
            value={formData.building_land_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Floor Parcel ID</label>
          <input
            type="text"
            name="floor_parcel_id"
            value={formData.floor_parcel_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Flag</label>
          <input
            type="text"
            name="confirm_flag"
            value={formData.confirm_flag}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <input
            type="text"
            name="payment_method"
            value={formData.payment_method}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Charge Type</label>
          <input
            type="text"
            name="charge_type"
            value={formData.charge_type}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Receipt Number</label>
          <input
            type="text"
            name="receipt_number"
            value={formData.receipt_number}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Cheque Date</label>
          <input
            type="text"
            name="cheque_date"
            value={formData.cheque_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Currency Code</label>
          <input
            type="text"
            name="currency_code"
            value={formData.currency_code}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Exchange Rate</label>
          <input
            type="text"
            name="exchange_rate"
            value={formData.exchange_rate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Exchange Rate Type</label>
          <input
            type="text"
            name="exchange_rate_type"
            value={formData.exchange_rate_type}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Exchange Rate Type</label>
          <input
            type="text"
            name="exchange_rate_type"
            value={formData.exchange_rate_type}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Exchange Rate Date</label>
          <input
            type="text"
            name="exchange_rate_date"
            value={formData.exchange_rate_date}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="section">
        <h3>Receipt Details</h3>
        <div className="form-group">
          <label>Receipt Amount</label>
          <input
            type="text"
            name="receipt_amount"
            value={formData.receipt_amount}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="section">
        <h3>Other Details</h3>
        <div className="form-group">
          <label>Location ID</label>
          <input
            type="text"
            name="location_id"
            value={formData.location_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Sale Admin ID</label>
          <input
            type="text"
            name="sale_admin_id"
            value={formData.sale_admin_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Payment Term</label>
          <input
            type="text"
            name="payment_term"
            value={formData.payment_term}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Mortgage Employee Name</label>
          <input
            type="text"
            name="Mortgage_Employee_name"
            value={formData.Mortgage_Employee_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Mortgage Employee Contact</label>
          <input
            type="text"
            name="Mortgage_Employee_contact"
            value={formData.Mortgage_Employee_contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>DAAR English Lender Name</label>
          <input
            type="text"
            name="DAAR_English_Lender_Name"
            value={formData.DAAR_English_Lender_Name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>DAAR Arabic Lender</label>
          <input
            type="text"
            name="DAAAR_Arabic_Lender"
            value={formData.DAAAR_Arabic_Lender}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>RETT VAT Exemption</label>
          <input
            type="text"
            name="RETT_VAT_Exemption"
            value={formData.RETT_VAT_Exemption}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>RETT VAT Reimbursement Certificate Number</label>
          <input
            type="text"
            name="RETT_VAT_Reimbursement_Certificate_Number"
            value={formData.RETT_VAT_Reimbursement_Certificate_Number}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="buttons">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CustomerReservation;
