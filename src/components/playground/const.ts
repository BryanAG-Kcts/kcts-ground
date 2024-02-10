export const generateIframeHTML = (html: string, css: string, js: string): string => `<html><head><style>${css}</style></head><body>${html}<script>${js}</script></body></html>`
