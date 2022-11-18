import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useState } from 'react';

import Button from '@/components/lib/Button';
import WYSIWYGEditor from '@/components/lib/WYSIWYGEditor';
import WYSIWYGPreview from '@/components/lib/WYSIWYGPreview';

const SampleEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [error, setError] = useState(false);
  const [savedState, setSavedState] = useState('');

  const handleShowPreview = () => {
    setError(false);

    if (!editorState.getCurrentContent().hasText()) {
      setError(true);
    } else {
      setSavedState(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }
  };

  return (
    <main className="my-32 w-full">
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-20 px-5 md:px-10">
        <div className="flex w-full flex-col items-center gap-5">
          <WYSIWYGEditor
            error={error}
            helperText={error ? 'Body cannot be empty' : ''}
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />

          <Button onClick={handleShowPreview}>Show Preview</Button>
        </div>

        <div className="flex w-full flex-col gap-10">
          <span className="text-sm font-bold">PREVIEW</span>

          <WYSIWYGPreview htmlString={savedState} />
        </div>
      </div>
    </main>
  );
};

export default SampleEditor;
