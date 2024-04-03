import React, { useState, useRef } from 'react';
import Header from './headerM1';
import { extractDataFromPdf } from './process-pdf';

function ProfilePage() {
    const [file, setFile] = useState(null);
    const [profileData, setProfileData] = useState({
        name: '',
        phone: '',
        address: ''
    });
    
    const firstName = profileData.name ? profileData.name.split(' ').slice(1).join(' ') : "";
    const lastName = profileData.name ? profileData.name.split(' ')[0] : "";

    const fileInputRef = useRef();

    const onChange = async (e) => {
        try {
            const url = URL.createObjectURL(e.target.files[0]);
            setFile(url);
            const data = await extractDataFromPdf(url);
            setProfileData(data);
        } catch (error) {}
    }

    const onUploadResumeClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <Header />
            <input type="file" onChange={onChange} style={{ display: 'none' }} ref={fileInputRef} />
            <div className="flex">
                <div className="w-1/3 p-4 mt-12 ml-8">
                    <img className="rounded-full w-60 h-60 mx-auto" src="/Rectangle 90.png" alt="Profile" />
                    <h2 className="font-bold text-4xl mt-4 mr-4">Samuel</h2>
                    <p className="text-xl mr-4">Software Engineer</p>
                    <p className="text-xl mr-4">E0122</p>
                    <p className="text-xl mr-4">samuel@dell.com</p>
                    <button className="bg-[#0076CE] text-white p-2 rounded mt-4" onClick={onUploadResumeClick}>Upload resume</button>
                    
                    <div className="rounded p-4 mt-4" style={{backgroundColor: '#F6F1F1'}}>
                        <p>Primary Manager: <strong>John</strong></p>
                        <p>Date of joining: <strong>02-Dec-2020</strong></p>
                        <a href="#" className="underline text-[#0076CE]">Download Employee Career Summary Report</a>
                    </div>

                    <div className="rounded p-4 mt-4" style={{backgroundColor: '#E1F1FF'}}>
                        <h3 className="font-bold">Direct Partner</h3>
                        <hr />
                        <img className="rounded-full w-28 h-28 mt-4" src="/e855bfbe9e1cbe53bb37f2a2cccad182.jpg" alt="Partner" />
                        <h4 className="font-bold mt-4">Ali bin Muhammad</h4>
                        <p>Senior Software Engineer</p>
                        <p>E0021</p>
                    </div>
                </div>

                <div className="w-2/3 p-4 mr-8 mt-12">
                    <div className="rounded p-4" style={{backgroundColor: '#F6F1F1'}}>
                        <h3 className="font-bold">BASIC DETAILS</h3>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div><p>First Name</p><input className="rounded bg-white p-2" value={firstName} /></div>
                            <div><p>Last Name</p><input className="rounded bg-white p-2" value={lastName} /></div>
                            <div><p>Gender</p><input className="rounded bg-white p-2" value="Male" /></div>
                            <div><p>Date of Joining</p><input className="rounded bg-white p-2" value="02-Dec-2017" /></div>
                            <div><p>Department</p><input className="rounded bg-white p-2" value="Software Engineering" /></div>
                            <div><p>Employee Type</p><input className="rounded bg-white p-2" value="Regular" /></div>
                        </div>
                    </div>

                    <div className="flex mt-4">
                        <div className="rounded p-4 w-1/2 mr-2" style={{backgroundColor: '#F6F1F1'}}>
                            <h3 className="font-bold">PERSONAL DETAILS</h3>
                            <div className="grid grid-cols-1 gap-4 mt-4">
                                <div><p>Address</p><textarea className="rounded bg-white p-2 w-full" rows="4" wrap="soft" value={profileData.address} /></div>
                                <div><p>Contact Details</p><input className="rounded bg-white p-2 w-full" value={profileData.phone} /></div>
                                <div><p>Date of Birth</p><input className="rounded bg-white p-2 w-full" value="25-Jan-1995" /></div>
                            </div>
                        </div>
                    
                        <div className="rounded  p-4 w-1/2 ml-2" style={{backgroundColor: '#E1F1FF'}}>
                            <h3 className="font-bold">ORGANIZATION STRUCTURE</h3>
                            <div className="grid grid-cols-1 gap-4 mt-4">
                                <div><p>Company</p><input className="rounded bg-white p-2 w-full" value="Dell Technologies Malaysia" /></div>
                                <div><p>Team</p><input className="rounded bg-white p-2 w-full" value="Software Engineer-IT" /></div>
                                <div><p>Location</p><input className="rounded bg-white p-2 w-full" value="Cyberjaya, MY" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded  p-4 mt-2" style={{backgroundColor: '#E1F1FF'}}>
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <div><p className="font-bold text-lg">EDUCATION</p><input className="rounded bg-white p-2 w-full" value="Universiti Malaya, Bachelor of Computer Science (Software Engineering)" /></div>
                            <div><p className="font-bold text-lg">Previous Working Experience</p><input className="rounded bg-white p-2 w-full" value="Software Engineer Intern, MoneyLion MY" /></div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;