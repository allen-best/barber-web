declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageView(path: string, title?: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title ?? document.title,
      page_location: window.location.href,
    });
  }
}

export function trackEvent(action: string, params?: Record<string, string | number | boolean>) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
}
