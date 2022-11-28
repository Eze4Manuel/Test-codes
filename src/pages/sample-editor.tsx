// import WYSIWYGEditor from '@/components/lib/WYSIWYGEditor';
// import WYSIWYGPreview from '@/components/lib/WYSIWYGPreview';

const SampleEditor = () => {
  return (
    <main className="my-32 w-full">
      <div className="flex w-full flex-col gap-20">
        <div className="flex w-full flex-col items-center gap-5">
          {/* <WYSIWYGEditor
            error={error}
            helperText={error ? 'Body cannot be empty' : ''}
            editorState={editorState}
            onEditorStateChange={setEditorState}
          /> */}
          {/* 
          <Button onClick={handleShowPreview}>Show Preview</Button> */}
        </div>
        {/* 
        <div className="flex w-full flex-col gap-10">
          <span className="text-sm font-bold">PREVIEW</span>
          <WYSIWYGPreview htmlString={savedState} />
        </div> */}
      </div>
    </main>
  );
};

export default SampleEditor;
