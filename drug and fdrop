function allowDropDragOver(e) {
    e.preventDefault();
}

function dragStart(e) {
    e.dataTransfer.setData("dragItemID", e.target.id);
}

function dropIt(e) {
    e.preventDefault();
    var dataId = e.dataTransfer.getData("dragItemID");
    e.target.appendChild( document.getElementById(dataId));
}

<table>
    <tr>
        <td>
            <div id="bin1" ondrop="dropIt(event)" ondragover="allowDropDragOver(event)" class="dragDropBin">
                <img id="dragImage" src="../Images/HTML5LogoSmall.png" 
                     draggable="true" ondragstart="dragStart(event)" class="dragImage">
            </div>
        </td>
        <td><div id="bin2" ondrop="dropIt(event)" ondragover="allowDropDragOver(event)" class="dragDropBin"></div></td>
    </tr>
    <tr>
        <td><div id="bin3" ondrop="dropIt(event)" ondragover="allowDropDragOver(event)" class="dragDropBin"></div></td>
        <td><div id="bin4" ondrop="dropIt(event)" ondragover="allowDropDragOver(event)" class="dragDropBin"></div></td>
    </tr>
</table>
