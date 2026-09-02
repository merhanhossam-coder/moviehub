import useForm from '../hooks/useForm'

function Contact() {
  const {
    values,
    errors,
    isSubmitting,
    submitError,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useForm()

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-50 mb-6">Contact / Registration</h1>

      {submitSuccess && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-emerald-500/15 border border-emerald-400 text-emerald-300 text-sm">
          Form submitted successfully!
        </div>
      )}

      {submitError && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/15 border border-red-400 text-red-300 text-sm">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-400"
            value={values.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-400"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-400"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-400"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1" htmlFor="message">
            Message / Address
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-400"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2.5 rounded-full text-sm bg-indigo-500/15 border border-indigo-400 text-indigo-300 hover:text-indigo-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default Contact
