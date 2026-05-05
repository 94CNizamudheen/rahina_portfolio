import { useState, useRef, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FieldError {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL = 'raahinaummer@gmail.com';
const PHONE = '+91-9497232817';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.58 2 2 0 0 1 3.61 1.4h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.9 16z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const CONTACT_DETAILS = [
  { icon: <MailIcon />, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: <PhoneIcon />, label: 'Phone', value: PHONE, href: `tel:${PHONE.replace(/-/g, '')}` },
  { icon: <MapPinIcon />, label: 'Location', value: 'Kerala, India', href: null },
];

function validateForm(form: FormState): FieldError {
  const errors: FieldError = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Message is too short';
  return errors;
}

function InputField({
  label, name, type = 'text', value, onChange, error, placeholder, multiline = false,
}: {
  label: string; name: keyof FormState; type?: string; value: string;
  onChange: (v: string) => void; error?: string; placeholder: string; multiline?: boolean;
}) {
  const commonStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${error ? 'rgba(248,113,113,0.5)' : '#1e1e2e'}`,
    color: '#e2e8f0',
    outline: 'none',
    transition: 'border-color 0.2s',
    resize: 'none' as const,
  };

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block font-mono text-xs" style={{ color: '#64748b' }}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className="w-full rounded-lg px-4 py-3 text-sm font-mono"
          style={commonStyle}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,245,212,0.4)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = error ? 'rgba(248,113,113,0.5)' : '#1e1e2e'; }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg px-4 py-3 text-sm font-mono"
          style={commonStyle}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,245,212,0.4)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = error ? 'rgba(248,113,113,0.5)' : '#1e1e2e'; }}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${name}-error`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="font-mono text-xs"
            style={{ color: '#f87171' }}
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const setField = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      aria-label="Contact section"
      style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #0a0a0f 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="font-mono text-sm mb-3" style={{ color: '#00f5d4' }}>
              05 / contact
            </p>
            <h2
              className="font-display font-bold text-4xl md:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Let's{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00f5d4, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Connect
              </span>
            </h2>
            <p className="mt-4 max-w-lg" style={{ color: '#64748b' }}>
              Open to full-time positions, remote work, and interesting collaborations.
              Drop a message — I respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10">
            <motion.div variants={fadeUp} className="md:col-span-2 space-y-4">
              {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{
                    background: 'rgba(15, 15, 26, 0.8)',
                    border: '1px solid #1e1e2e',
                    backdropFilter: 'blur(12px)',
                  }}
                  whileHover={{ borderColor: 'rgba(0,245,212,0.2)', scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="p-2 rounded-lg shrink-0"
                    style={{ background: 'rgba(0,245,212,0.08)', color: '#00f5d4' }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs mb-1" style={{ color: '#64748b' }}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium transition-colors hover:text-cyan"
                        style={{ color: '#e2e8f0' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="p-5 rounded-xl"
                style={{
                  background: 'rgba(0,245,212,0.03)',
                  border: '1px solid rgba(0,245,212,0.12)',
                }}
                whileHover={{ scale: 1.01 }}
              >
                <p className="font-mono text-xs mb-2" style={{ color: '#00f5d4' }}>// availability</p>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'pulse 2s infinite' }}
                    aria-label="Online"
                  />
                  <span className="font-mono text-sm" style={{ color: '#94a3b8' }}>
                    Available for opportunities
                  </span>
                </div>
                <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-3">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(15, 15, 26, 0.8)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid #1e1e2e',
                }}
                aria-label="Contact form"
              >
                <AnimatePresence mode="wait">
                  {status === 'sent' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                        style={{ background: 'rgba(74,222,128,0.12)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)' }}
                      >
                        <CheckIcon />
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2" style={{ color: '#e2e8f0' }}>
                        Message Sent!
                      </h3>
                      <p className="font-mono text-sm" style={{ color: '#64748b' }}>
                        I'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" className="space-y-5">
                      <InputField
                        label="// name"
                        name="name"
                        value={form.name}
                        onChange={setField('name')}
                        error={errors.name}
                        placeholder="Your full name"
                      />
                      <InputField
                        label="// email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={setField('email')}
                        error={errors.email}
                        placeholder="your@email.com"
                      />
                      <InputField
                        label="// message"
                        name="message"
                        value={form.message}
                        onChange={setField('message')}
                        error={errors.message}
                        placeholder="Tell me about the opportunity or project..."
                        multiline
                      />

                      <motion.button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-sm transition-all"
                        style={{
                          background: status === 'sending'
                            ? 'rgba(0,245,212,0.5)'
                            : 'linear-gradient(135deg, #00f5d4, #00c4aa)',
                          color: '#0a0a0f',
                          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        }}
                        whileHover={status !== 'sending' ? { scale: 1.02, boxShadow: '0 0 30px rgba(0,245,212,0.4)' } : {}}
                        whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                        aria-busy={status === 'sending'}
                      >
                        {status === 'sending' ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full inline-block"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <SendIcon />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
