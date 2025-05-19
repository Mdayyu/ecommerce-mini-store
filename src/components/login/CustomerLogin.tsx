import { ClassNames } from "@emotion/react";
import { useCustomerLogin } from "./hook/useCustomerLogin";

export default function CustomerLogin() {
  const {
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    handleSubmit,
  } = useCustomerLogin();

  return (
    <ClassNames>
      {({ css, cx }) => (
        <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
          style={{ backgroundImage: "url('/assets/background.png')" }}
        >
          <div className="w-full max-w-lg p-10 bg-green-100 rounded-2xl shadow-lg">
            {/* Logo & Title */}
            <div className="text-center mb-8">
              <img src="/assets/Logo1.jpg" alt="EcoFood" className="mx-auto h-24 rounded-full" />
              <h1 className="text-3xl font-bold text-green-700 mt-4">EcoFood Register</h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-green-700 font-semibold mb-2 text-lg">Username</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. JohnDoe"
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-green-700 font-semibold mb-2 text-lg">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-green-700 font-semibold mb-2 text-lg">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                />
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 text-lg"
              >
                Register
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-2 my-6">
              <hr className="flex-grow border-t border-green-400" />
              <span className="text-green-600 font-medium">or continue with</span>
              <hr className="flex-grow border-t border-green-400" />
            </div>

            {/* Google Button */}
            <button className="w-full bg-white border border-green-300 text-green-700 font-medium py-3 rounded-lg flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition duration-300 text-base">
              <img src="/assets/image.png" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
          </div>
        </div>
      )}
    </ClassNames>
  );
}
