export const blogPosts = [
  {
    id: 'blog-1',
    slug: 'drug-de-addiction-rehabilitation',
    title: 'Drug-De Addiction & Rehabilitation',
    image: '/src/assets/activity1.png',
    category: 'Rehabilitation',
    date: '21 Apr 2026',
    gallery: [
      '/src/assets/img8.jpg',
      '/src/assets/img9.jpg',
      '/src/assets/activity1.png'
    ],
    desc: 'Understanding the path to recovery from substance dependency and how professional rehabilitation provides the structure needed for a substance-free life.',
    fullDesc: `Rehabilitation is a critical step in the recovery from substance dependency. It provides a structured, supportive environment where individuals can safely undergo detoxification and begin the psychological healing process.

At MindCare, our approach focuses on both the physical and emotional aspects of addiction. We provide tailored therapy sessions, family counseling, and long-term relapse prevention strategies. Overcoming addiction is not just about stopping substance use—it is about rebuilding a fulfilling, healthy life.`
  },
  {
    id: 'blog-2',
    slug: '7-ways-to-improve-mental-health',
    title: '7 ways to improve mental health',
    image: '/src/assets/activity2.png',
    category: 'Wellness',
    date: '18 Apr 2026',
    gallery: [
      '/src/assets/img4.jpg',
      '/src/assets/img5.jpg',
      '/src/assets/activity2.png'
    ],
    desc: 'Simple, actionable daily habits that can significantly boost your mood, resilience, and overall psychological well-being.',
    fullDesc: `Improving your mental health doesn't always require massive life changes. Often, it comes down to integrating simple, consistent habits into your daily routine. Here are 7 effective ways to boost your resilience:

1. Prioritize Quality Sleep: Aim for 7-9 hours of restful sleep every night.
2. Stay Active: Regular exercise releases endorphins, which are natural mood lifters.
3. Practice Mindfulness: Even 5 minutes of daily meditation can reduce stress and anxiety.
4. Nutritious Diet: What you eat directly impacts your brain function and energy levels.
5. Social Connection: Spend meaningful time with friends and family.
6. Limit Screen Time: Set boundaries, especially around negative news and social media comparisons.
7. Seek Professional Help: Never hesitate to reach out to a therapist when you feel overwhelmed.`
  },
  {
    id: 'blog-3',
    slug: 'what-is-exactly-social-anxiety',
    title: 'What is exactly social anxiety?',
    image: '/src/assets/activity3.png',
    category: 'Anxiety',
    date: '15 Apr 2026',
    gallery: [
      '/src/assets/img6.jpg',
      '/src/assets/img7.jpg',
      '/src/assets/activity3.png'
    ],
    desc: 'Differentiating between normal nervousness and social anxiety disorder, and exploring effective treatment approaches like CBT.',
    fullDesc: `Social anxiety disorder is far more complex than just being "shy." It involves an intense, persistent fear of being watched and judged by others. This fear can affect work, school, and your other day-to-day activities. It can even make it hard to make and keep friends.

Physical symptoms often include rapid heart rate, sweating, and nausea when faced with social situations. Fortunately, social anxiety is highly treatable. Cognitive Behavioral Therapy (CBT) is considered the gold standard, helping individuals challenge and reframe their negative thought patterns.

If social situations cause you significant distress, our team at MindCare is here to help you navigate and overcome these challenges.`
  }
];

export const pastEvents = [
  {
    id: 'past-4',
    slug: 'man-ki-baat',
    title: 'मन की बात',
    image: '/src/assets/activity5.jpg',
    category: 'Inner Architect',
    date: '12 May 2025',
    gallery: [
      '/src/assets/img2.jpg',
      '/src/assets/img3.jpg',
      '/src/assets/activity4.png',
      '/src/assets/activity6_50.jpg'
    ],
    desc: 'Our minds carry stories, poems, music, and unsaid emotions that deserve to be heard. Man ki Baat is a liberating, judgment-free platform where individuals can step up to the microphone and express themselves creatively.',
    fullDesc: `An Expressive Open Mic Our minds carry stories, poems, music, and unsaid emotions that deserve to be heard. Man ki Baat is a liberating, judgment-free platform where individuals can step up to the microphone and express themselves creatively. Whether you want to share your journey through art, poetry, or storytelling, or simply sit back and listen to others, this open mic is a celebratory space for vulnerability, connection, and emotional release.`
  },

  {
    id: 'past-5',
    slug: 'satrangi-man',
    title: 'सतरंगी मन',
    image: '/src/assets/activity4.png',
    category: 'Inner Architect',
    date: '19 Apr 2025',
    gallery: [
      '/src/assets/img1.jpg',
      '/src/assets/img2.jpg',
      '/src/assets/activity4.png'
    ],
    desc: 'Navigating identity, acceptance, and mental well-being requires a space that is not just inclusive, but deeply affirming. Satrangi Man is a safe, completely confidential, and empathetic support group dedicated to the LGBTQIA+ community.',
    fullDesc: `An LGBTQIA+ Support Group Navigating identity, acceptance, and mental well-being requires a space that is not just inclusive, but deeply affirming. Satrangi Man is a safe, completely confidential, and empathetic support group dedicated to the LGBTQIA+ community. It is a space to share personal stories, discuss unique challenges, find solidarity, and heal together within a community that truly understands and celebrates your authentic self.`
  }
];

export const upcomingEvents = [
  {
    id: 'upcoming-6',
    slug: 'emotional-reboot',
    title: 'Emotional Reboot',
    image: '/src/assets/emotion-img1.png',
    category: 'Inner Architect',
    date: 'To Be Announced',
    gallery: [
      '/src/assets/emotion-img1.png',
      '/src/assets/emotion-img2.jpeg',
      '/src/assets/emotion-img3.jpeg',
      '/src/assets/emotion-img4.jpg',
      '/src/assets/emotion-img5.jpg'
    ],
    desc: 'Just like our digital devices, our minds sometimes need a complete reset to function at their best. Emotional Reboot is a structured, multi-level workshop designed to take you from emotional overwhelm to emotional resilience.',
    fullDesc: `A Multi-Level Emotion Management Workshop Just like our digital devices, our minds sometimes need a complete reset to function at their best. Emotional Reboot is a structured, multi-level workshop designed to take you from emotional overwhelm to emotional resilience. Through interactive, step-by-step sessions, you will learn the practical psychology behind why we feel what we feel, alongside actionable tools for emotional regulation, mindfulness, and healthy coping mechanisms.`
  }
];

export const allEventsData = [...blogPosts, ...upcomingEvents, ...pastEvents];
