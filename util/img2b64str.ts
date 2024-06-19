import fs from "fs";
import path from "path";

function img2b64str(imgPath: string): string {
    const svgPath = path.join(__dirname, imgPath);

    const base64String = Buffer.from(fs.readFileSync(svgPath)).toString('base64');
    return `data:image/svg+xml;base64,${base64String}`;

}

export { img2b64str }