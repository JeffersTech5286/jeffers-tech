from PIL import Image
from pathlib import Path

TARGET_SIZE = (540, 360)

def resize_images_in_directory(input_dir: str, output_dir: str) -> None:
    input_path = Path(input_dir)
    output_path = Path(output_dir)

    if not input_path.exists():
        print(f"Diretório de entrada '{input_dir}' não encontrado.")
        return

    output_path.mkdir(parents=True, exist_ok=True)

    supported_extensions = (".jpg", ".jpeg", ".png", ".bmp", ".gif", ".webp")

    for image_file in input_path.iterdir():
        if image_file.suffix.lower() in supported_extensions:
            try:
                with Image.open(image_file) as img:
                    resized_img = img.resize(TARGET_SIZE)
                    output_file = output_path / image_file.name
                    resized_img.save(output_file)
                    print(f"Redimensionado: {image_file.name}")
            except Exception as e:
                print(f"Erro ao redimensionar {image_file.name}: {e}")

if __name__ == "__main__":
    import sys

    if len(sys.argv) < 3:
        print("Uso: poetry run python src/resize_images/main.py <diretório_entrada> <diretório_saida>")
    else:
        resize_images_in_directory(sys.argv[1], sys.argv[2])
