import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, Lock, ArrowLeft } from 'lucide-react';

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Account created successfully!');
  };

  return (
    <div className="min-h-screen bg-neutral-800 flex items-center justify-center p-4">
      <style>{`
        @media (max-width: 640px) {
          .form-container {
            max-width: 100%;
            padding: 1rem;
          }
          .form-box {
            padding: 1.5rem;
          }
          h1 {
            font-size: 2rem;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .form-container {
            max-width: 500px;
          }
        }
        
        @media (min-width: 1025px) {
          .form-container {
            max-width: 600px;
          }
        }
        
        input::placeholder {
          color: #9ca3af;
        }
        
        .input-field:focus {
          outline: none;
          border-color: #fbbf24;
        }
      `}</style>

      <div className="w-full max-w-md form-container">
        <button className="flex items-center gap-2 text-white mb-6 hover:text-yellow-400 transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="form-box bg-neutral-900 rounded-lg border-2 border-yellow-400 p-8">
          <h1 className="text-4xl font-bold text-yellow-400 text-center mb-2">
            Create Account
          </h1>
          <p className="text-gray-400 text-center mb-8">Join us today</p>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-white mb-2 font-medium">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="input-field w-full bg-neutral-800 text-white border-2 border-yellow-400 rounded-lg pl-10 pr-4 py-3"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white mb-2 font-medium">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="input-field w-full bg-neutral-800 text-white border-2 border-yellow-400 rounded-lg pl-10 pr-4 py-3"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-white mb-2 font-medium">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="input-field w-full bg-neutral-800 text-white border-2 border-yellow-400 rounded-lg pl-10 pr-4 py-3"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white mb-2 font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="input-field w-full bg-neutral-800 text-white border-2 border-yellow-400 rounded-lg pl-10 pr-12 py-3"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-white mb-2 font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="input-field w-full bg-neutral-800 text-white border-2 border-yellow-400 rounded-lg pl-10 pr-12 py-3"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-colors"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-400">
              Already have an account?{' '}
              <a href="#" className="text-yellow-400 hover:underline font-medium">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}