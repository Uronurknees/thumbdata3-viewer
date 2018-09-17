var __awaiter=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(s,n){function a(e){try{l(i.next(e))}catch(e){n(e)}}function o(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){e.done?s(e.value):new r(function(t){t(e.value)}).then(a,o)}l((i=i.apply(e,t||[])).next())})};((e,t,r)=>{const i=5e6;class s{constructor(){this.fileReader=new FileReader,this.fileReader.addEventListener("loadend",()=>{this.complete&&this.complete(this.fileReader.result)})}readAsArrayBuffer(e){return new Promise(t=>{this.complete=t,this.fileReader.readAsArrayBuffer(e)})}}e.addEventListener("DOMContentLoaded",()=>{let e={fileOpen:t.querySelector("#filePickerOpen"),filePicker:t.querySelector("#filePicker"),imageContainer:t.querySelector("#imageContainer"),emptyText:t.querySelector("#emptyText"),imageTemplate:t.querySelector("#imageTemplate"),imageViewer:t.querySelector(".image-viewer"),imageViewerMain:t.querySelector(".image-viewer img"),closeButton:t.querySelector("#closeButton"),progressContainer:t.querySelector(".progress"),progress:t.querySelector(".progress-bar")},r=()=>{e.imageContainer.querySelectorAll(".col-md-3:not(.d-none)").forEach(t=>e.imageContainer.removeChild(t))};e.filePicker.addEventListener("change",t=>{let n=t.target;if(0===n.files.length)return;let a=n.files[0];e.progressContainer.classList.remove("d-none"),e.progress.style.width="0%",e.progress.textContent="Parsing..",e.emptyText.classList.add("d-none"),e.fileOpen.classList.add("d-none"),r();let o=new class{constructor(e){this.file=e,this.fileReader=new FileReader,this.imagePoints=[],this.markerStart=!1,this.jpegStart=0,this.readStartPos=0,this.fileReader.addEventListener("loadend",()=>{let e=this.markerStart,t=this.jpegStart,r=new Uint8Array(this.fileReader.result);for(let i=0;i<r.length;i++)255!==r[i]||e?e&&(216===r[i]?t=i-1+this.readStartPos:217===r[i]&&this.imagePoints.push([t,i+this.readStartPos]),e=!1):e=!0;this.markerStart=e,this.jpegStart=t,this.readStartPos=this.nextPosition;let i=this.readNextChunk();!1===i?this.done(this.imagePoints):this.progress(i)})}readNextChunk(){if(this.readStartPos>this.file.size)return!1;{this.nextPosition=this.readStartPos+i;const e=this.nextPosition>this.file.size?void 0:this.nextPosition,t=this.file.slice(this.readStartPos,e);return this.fileReader.readAsArrayBuffer(t),this.readStartPos/this.file.size*100}}extractPoints(){return new Promise(e=>{this.done=e,this.readNextChunk()})}extractImages(e){return __awaiter(this,void 0,void 0,function*(){let t=new s,r=[];for(let i=0;i<e.length;i++){let[s,n]=e[i],a=this.file.slice(s,n),o=new Uint8Array(yield t.readAsArrayBuffer(a));r.push(URL.createObjectURL(new Blob([o],{type:"image/jpeg"}))),this.progress(i/e.length*100)}return r})}}(a);o.progress=(t=>{e.progress.style.width=t+"%"}),o.extractPoints().then(t=>(e.progress.textContent="Extracting..",o.extractImages(t))).then(t=>(t=>{if(r(),0===t.length)e.emptyText.classList.remove("d-none");else{e.emptyText.classList.add("d-none");for(let r=0;r<t.length;r++){let i=e.imageTemplate.cloneNode(!0),s=i.querySelector("img");i.classList.remove("d-none"),s.src=t[r],i.addEventListener("click",()=>{e.imageViewerMain.src=t[r],e.imageViewer.classList.remove("d-none")}),e.imageContainer.appendChild(i)}}})(t)).then(()=>{e.progressContainer.classList.add("d-none"),e.fileOpen.classList.remove("d-none"),e.filePicker.value=null})}),e.fileOpen.addEventListener("click",()=>{e.filePicker.click()}),e.closeButton.addEventListener("click",()=>{e.imageViewer.classList.add("d-none")})})})(window,document,console);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbIndpbmRvdyIsImRvY3VtZW50IiwiY29uc29sZSIsIlJFQURfQlVGRkVSIiwiUHJvbWlzZVJlYWRlciIsIltvYmplY3QgT2JqZWN0XSIsInRoaXMiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wbGV0ZSIsInJlc3VsdCIsImJsb2IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRBc0FycmF5QnVmZmVyIiwiRE9NIiwiZmlsZU9wZW4iLCJxdWVyeVNlbGVjdG9yIiwiZmlsZVBpY2tlciIsImltYWdlQ29udGFpbmVyIiwiZW1wdHlUZXh0IiwiaW1hZ2VUZW1wbGF0ZSIsImltYWdlVmlld2VyIiwiaW1hZ2VWaWV3ZXJNYWluIiwiY2xvc2VCdXR0b24iLCJwcm9ncmVzc0NvbnRhaW5lciIsInByb2dyZXNzIiwiY2xlYXJMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsImZpbGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZSIsIndpZHRoIiwidGV4dENvbnRlbnQiLCJhZGQiLCJ0aHVtYlJlYWRlciIsImltYWdlUG9pbnRzIiwibWFya2VyU3RhcnQiLCJqcGVnU3RhcnQiLCJyZWFkU3RhcnRQb3MiLCJkYXRhIiwiVWludDhBcnJheSIsImkiLCJwdXNoIiwibmV4dFBvc2l0aW9uIiwiY2h1bmtQcm9nIiwicmVhZE5leHRDaHVuayIsImRvbmUiLCJzaXplIiwicmVhZFRvIiwidW5kZWZpbmVkIiwibmV4dFNsaWNlIiwic2xpY2UiLCJwb2ludHMiLCJleHRyYWN0b3IiLCJpbWFnZXMiLCJyZWFkU3RhcnQiLCJyZWFkRW5kIiwiZmlsZVNsaWNlIiwiYnVmZmVyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQmxvYiIsInR5cGUiLCJleHRyYWN0UG9pbnRzIiwidGhlbiIsImV4dHJhY3RJbWFnZXMiLCJpbWFnZUNoaWxkIiwiY2xvbmVOb2RlIiwiaW1hZ2VQcmV2aWV3Iiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJ1cGRhdGVMaXN0IiwidmFsdWUiLCJjbGljayJdLCJtYXBwaW5ncyI6InVTQXNCQSxFQUFFQSxFQUFnQkMsRUFBb0JDLEtBRXJDLE1BQU1DLEVBQWMsVUFlcEJDLEVBUUNDLGNBQ0NDLEtBQUtDLFdBQWEsSUFBSUMsV0FDdEJGLEtBQUtDLFdBQVdFLGlCQUFpQixVQUFXLEtBQ3ZDSCxLQUFLSSxVQUNSSixLQUFLSSxTQUFTSixLQUFLQyxXQUFXSSxVQUlqQ04sa0JBQWtCTyxHQUNqQixPQUFPLElBQUlDLFFBQVFDLElBQ2xCUixLQUFLSSxTQUFXSSxFQUNoQlIsS0FBS0MsV0FBV1Esa0JBQWtCSCxNQStGckNaLEVBQU9TLGlCQUFpQixtQkFBb0IsS0FFM0MsSUFBSU8sR0FDSEMsU0FBVWhCLEVBQVNpQixjQUFjLG1CQUNqQ0MsV0FBWWxCLEVBQVNpQixjQUFjLGVBQ25DRSxlQUFnQm5CLEVBQVNpQixjQUFjLG1CQUN2Q0csVUFBV3BCLEVBQVNpQixjQUFjLGNBQ2xDSSxjQUFlckIsRUFBU2lCLGNBQWMsa0JBQ3RDSyxZQUFhdEIsRUFBU2lCLGNBQWMsaUJBQ3BDTSxnQkFBaUJ2QixFQUFTaUIsY0FBYyxxQkFDeENPLFlBQWF4QixFQUFTaUIsY0FBYyxnQkFDcENRLGtCQUFtQnpCLEVBQVNpQixjQUFjLGFBQzFDUyxTQUFVMUIsRUFBU2lCLGNBQWMsa0JBRzlCVSxFQUFZLEtBQzRCWixFQUFJSSxlQUFlUyxpQkFBaUIsMEJBQ3RFQyxRQUFRQyxHQUFTZixFQUFJSSxlQUFlWSxZQUFZRCxLQTRCMURmLEVBQUlHLFdBQVdWLGlCQUFpQixTQUFXd0IsSUFDMUMsSUFBSUMsRUFBNEJELEVBQU1DLE9BQ3RDLEdBQTRCLElBQXhCQSxFQUFPQyxNQUFNQyxPQUFjLE9BQy9CLElBQUlDLEVBQWFILEVBQU9DLE1BQU0sR0FFOUJuQixFQUFJVSxrQkFBa0JZLFVBQVVDLE9B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QWN1RCxXQUFVLEdBQ3pEQyxFQUFpQ0YsRUFBVzFELGNBQWMsT0FFOUQwRCxFQUFXdEMsVUFBVUMsT0FBTyxVQUM1QnVDLEVBQWFDLElBQU1mLEVBQU9iLEdBRTFCeUIsRUFBV25FLGlCQUFpQixRQUFTLEtBQ3BDTyxFQUFJUSxnQkFBZ0J1RCxJQUFNZixFQUFPYixHQUNqQ25DLEVBQUlPLFlBQVllLFVBQVVDLE9BQU8sWUFHbEN2QixFQUFJSSxlQUFlNEQsWUFBWUosTUE2QmhCSyxDQUFXakIsSUFDMUJVLEtBQUssS0FDTDFELEVBQUlVLGtCQUFrQlksVUFBVUssSUFBSSxVQUNwQzNCLEVBQUlDLFNBQVNxQixVQUFVQyxPQUFPLFVBQzlCdkIsRUFBSUcsV0FBVytELE1BQVEsU0FJMUJsRSxFQUFJQyxTQUFTUixpQkFBaUIsUUFBUyxLQUN0Q08sRUFBSUcsV0FBV2dFLFVBR2hCbkUsRUFBSVMsWUFBWWhCLGlCQUFpQixRQUFTLEtBQ3pDTyxFQUFJTyxZQUFZZSxVQUFVSyxJQUFJLGVBck5qQyxDQTBORzNDLE9BQVFDLFNBQVVDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Imh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS94MGEvdGh1bWJkYXRhMy12aWV3ZXIvbWFzdGVyL3NyYy8ifQ==
