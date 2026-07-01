import { Router } from 'express';
import { z } from 'zod';

export const contactRouter = Router();

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  company: z.string().max(120).optional().default(''),
  message: z.string().min(10).max(1500),
});

contactRouter.post('/contact', (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid contact request', issues: parsed.error.flatten() });
  }

  // Production hook: connect this to EmailJS, Resend, SendGrid, AWS SES, or a database.
  console.info('Portfolio contact lead:', parsed.data);
  return res.status(202).json({
    ok: true,
    message: 'Contact request validated. Connect an email provider before using this in production.',
  });
});
