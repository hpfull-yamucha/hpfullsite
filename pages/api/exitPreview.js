const exitPreview = async (_req, res) => {
  res.clearPreviewData();
  res.writeHead(307, { Location: `/` });
  res.end('Preview mode disabled');
};

export default exitPreview;
