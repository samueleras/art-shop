import imgage_placeholder from "../assets/no-image-placeholder.webp";

const getImageUrl = (iiif_url?: string, image_id?: string): string => {
  if (!image_id || !iiif_url) return imgage_placeholder;
  return `${iiif_url}/${image_id}/full/843,/0/default.jpg`;
};

export default getImageUrl;
