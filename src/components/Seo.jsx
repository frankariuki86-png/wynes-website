import { useEffect } from 'react';
import { siteInfo } from '../data/siteData';

function upsertMeta(attribute, key, value) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

function upsertLink(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export default function Seo({ title, description }) {
  useEffect(() => {
    const pageTitle = title || siteInfo.name;
    const pageDescription = description || siteInfo.description;

    document.title = pageTitle;

    upsertMeta('name', 'description', pageDescription);
    upsertMeta('name', 'keywords', 'Wynes Technical Training Institute, WynesTTI, Nakuru college, technical training, beauty courses, ICT courses');
    upsertMeta('property', 'og:title', pageTitle);
    upsertMeta('property', 'og:description', pageDescription);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', pageTitle);
    upsertMeta('name', 'twitter:description', pageDescription);
    upsertLink('canonical', window.location.href);
  }, [title, description]);

  return null;
}