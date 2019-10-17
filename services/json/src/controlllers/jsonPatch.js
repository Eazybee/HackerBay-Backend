import { applyOperation } from 'fast-json-patch';

const patchJson = (req, res) => {
  try {
    const { operation, document } = req.body;
    const { newDocument } = applyOperation(document, operation);

    res.status(200).json({
      status: 'success',
      data: {
        document: newDocument,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error,
    });
  }
};

export default patchJson;
