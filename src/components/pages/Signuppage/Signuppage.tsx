import { useEffect, useState } from 'react';

import SignUpForm from '../../signup/signup-form';
import Skeleton from '../../shared/skeleton';
import boyAirplaneImg from '../../../assets/images/g1576.svg';

export default function Signuppage() {
  const [openToSModal, setOpenToSModal] = useState(false);
  const [openPrivacyModal, setOpenPrivacyModal] = useState(false);
  const [hasTOSAgreed, setHasTOSAgreed] = useState(false);
  const [err, setErr] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<{
    email: string;
    name: string;
    password: string;
    password2: string;
    affiliation: string;
    google_jti?: string;
  }>({
    email: '',
    name: '',
    password: '',
    password2: '',
    affiliation: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((s) => ({ ...s, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passMatch = formData.password === formData.password2;
    if (!passMatch) {
      setErr('Passwords do not match');
    }
    if (formData.password.length < 8)
      setErr('Password length should be atleast 8 characters');

    if (!hasTOSAgreed) {
      setErr('Please Read our Terms of Service and accept it to continue.');
    }

    if (hasTOSAgreed && passMatch) {
      try {
        setLoading(true);

        setErr('');
      } catch (err) {
        setErr('You have already registered. Try signing in.');
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGoogleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasTOSAgreed) {
      setErr('Please Read our Terms of Service and accept it to continue.');
    }

    if (hasTOSAgreed) {
      try {
        setLoading(true);

        setErr('');
      } catch (err) {
        setErr('You have already registered. Try signing in.');
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Skeleton>
      <div className="flex flex-row w-full justify-evenly items-center">
        <div className="flex flex-col w-1/5 gap-12 justify">
          <img src={boyAirplaneImg} alt="signup-image" width={283} />
          <div className="space-y-3">
            <h1 className="font-lora font-bold text-5xl text-[#0449D1]">
              Sign up
            </h1>
            <h2 className="font-lora font-semibold text-4xl text-[#0F0F2C]">
              Start your Eurekai journey.
            </h2>
          </div>
        </div>

        <SignUpForm
          err={err}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
          openPrivacyModal={openPrivacyModal}
          openToSModal={openToSModal}
          setErr={setErr}
          setHasTOSAgreed={setHasTOSAgreed}
          setOpenPrivacyModal={setOpenPrivacyModal}
          setOpenToSModal={setOpenToSModal}
          loading={loading}
        />
      </div>
    </Skeleton>
  );
}
