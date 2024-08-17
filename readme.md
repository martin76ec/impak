# IMPAK - Your **Image** **Resizer** Tool

IMPAK is a powerful tool for resizing all images within a folder. By default, it exports images in all predefined sizes.

## Example usage:

```impak ./images ./resized --size sm,md,lg```

This command resizes images in the ./images directory and outputs them to the ./resized directory in the specified sizes.

## Options

| Option | Alias | Description | Possible Outputs |
|--------|-------|-------------|------------------|
| --size | -s    | List of sizes to resize the images to, separated by commas | xxs, xs, sm, md, lg, xl, 2xl |

## Sizes

| Size | Width (px) |
|------|------------|
| xxs  | 80         |
| xs   | 160        |
| sm   | 320        |
| md   | 640        |
| lg   | 1024       |
| xl   | 1280       |
| 2xl  | 1536       |

---

```
██╗███╗   ███╗██████╗  █████╗ ██╗  ██╗
██║████╗ ████║██╔══██╗██╔══██╗██║ ██╔╝
██║██╔████╔██║██████╔╝███████║█████╔╝ 
██║██║╚██╔╝██║██╔═══╝ ██╔══██║██╔═██╗ 
██║██║ ╚═╝ ██║██║     ██║  ██║██║  ██╗
╚═╝╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝
```
